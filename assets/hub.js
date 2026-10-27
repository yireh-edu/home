/*
 * 이레 · 첫 화면 (오늘 할 것) → irae-site/assets/hub.js
 *   [이어서 풀기] 마지막으로 보던 화면 (localStorage 'irae-home-last', 학년 화면·DT 화면이 남김)
 *   내 학년('irae-grade', e1~h3): 처음 한 번 고르면 칸들이 바로 그 학년 화면으로 감
 *   칸: 수학(math/학년.html) · 영어(english/학년.html) · DT 익히기(math/dt.html?next=과정) · 이레 수학 앱(숙제·단계별·연산)
 * 읽는 것: window.HUB_CONFIG({ grades, labels, dtCourse, counts, footer }) · window.DT_COURSES/DT_COUNTS(data/dt-data.js)
 */
(function () {
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const get = (k, f) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? f : v; } catch (e) { return f; } };
  const put = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const CFG = window.HUB_CONFIG || {};
  const GRADES = CFG.grades || [], LABEL = CFG.labels || {};
  let pickGrade = false;

  // 내 학년: 고른 적이 없으면 마지막으로 연 수학·영어 학년을 씀 (전부터 쓰던 학생은 다시 고를 필요 없음)
  function myGrade() {
    const g = get('irae-grade', '') || get('irae-math-last-grade', '') || get('irae-english-last-grade', '');
    return GRADES.includes(g) ? g : '';
  }

  // DT: 그 학년 과정의 다음 카드 (dt-app.js 와 같은 익힘 기준)
  const COURSES = window.DT_COURSES || [], COUNTS = window.DT_COUNTS || {};
  const BY_ID = new Map();
  for (const c of COURSES) for (const it of c.items) BY_ID.set(it.id, c.id);
  function dtNext(cid) {
    const c = COURSES.find(x => x.id === cid); if (!c) return null;
    const known = get('irae-dt-known', {}), best = get('irae-dtp-stage-best', {});
    const mastered = id => !!known[id] && (!(COUNTS[id] || 0) || (best[id] || 0) >= Math.ceil(Math.min(10, COUNTS[id]) * 0.8));
    const nx = c.items.find(it => !mastered(it.id) && it.pre.every(p => BY_ID.get(p) !== c.id || mastered(p)));
    return { label: c.label, next: nx ? nx.name : '', m: c.items.filter(it => mastered(it.id)).length, n: c.items.length };
  }

  const ICON = {
    math: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h6M8 4v6M14 7h5M5 17h6M14 15h5M14 19h5"/></svg>',
    english: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 9.5 5h1L15 19M7 14h7"/><path d="M17 9v10"/></svg>',
    dt: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="12" height="15" rx="2"/><path d="M8 3h10a2 2 0 0 1 2 2v13"/></svg>',
    app: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/></svg>',
  };
  const tile = (key, href, title, s2, sub) => `<a class="tile tile-${key}" href="${href}">
      <span class="tile-top"><span class="tile-ic">${ICON[key]}</span><span class="tile-t">${title}</span></span>
      ${s2 ? `<span class="tile-s2">${esc(s2)}</span>` : ''}<span class="tile-sub">${esc(sub)}</span></a>`;

  function render() {
    const g = myGrade(), last = get('irae-home-last', null);
    const dt = g ? dtNext((CFG.dtCourse || {})[g]) : null;
    $('#hub').innerHTML = `
      <header class="hub-head">
        <h1 class="hub-title">이레</h1>
        <button class="grade-btn" type="button" data-act="grade" aria-expanded="${pickGrade}">${g ? `${LABEL[g]} ▾` : '학년 고르기 ▾'}</button>
      </header>
      ${!g || pickGrade ? `<section class="grade-pick" aria-label="내 학년">
        <p class="gp-q">${g ? '학년을 바꿀까요?' : '몇 학년이에요?'} <span>고르면 수학·영어·DT가 바로 내 학년으로 열려요.</span></p>
        <div class="gp-chips">${GRADES.map(x => `<button class="chip" type="button" data-grade="${x}" aria-pressed="${x === g}">${LABEL[x]}</button>`).join('')}</div>
      </section>` : ''}
      ${last && last.href ? `<a class="resume" href="${esc(last.href)}"><span class="r-play" aria-hidden="true">▶</span><span class="r-txt"><b>이어서 풀기</b><span>${esc(last.title)}${last.sub ? ' · ' + esc(last.sub) : ''}</span></span></a>` : ''}
      <nav class="tiles" aria-label="이레 메뉴">
        ${tile('math', g ? `math/${g}.html` : 'math/index.html', '수학', g ? `${LABEL[g]} 수학` : '', g ? `이번 주 퀴즈 · 개념 · 연습 ${(CFG.counts || {}).math && CFG.counts.math[g] || ''}문제` : '학년을 고르면 바로 열려요')}
        ${tile('english', g ? `english/${g}.html` : 'english/index.html', '영어', g ? `${LABEL[g]} 영어` : '', g ? `오늘의 퀴즈 · 개념 · 발음 듣기` : '학년을 고르면 바로 열려요')}
        ${tile('dt', g ? `math/dt.html?next=${(CFG.dtCourse || {})[g]}` : 'math/dt.html', 'DT 익히기', dt ? `${dt.label} 정의·정리` : '', dt ? (dt.next ? `다음: ${dt.next} · 익힘 ${dt.m}/${dt.n}` : `다 익혔어요 · ${dt.m}/${dt.n}`) : '정의와 정리를 한 장씩')}
        ${tile('app', '../math/index.html', '이레 수학 앱', '숙제 · 단계별 · 연산', '선생님 숙제와 단계별 문제')}
      </nav>
      <p class="verse">이레: ‘여호와께서 준비하신다’ (창세기 22:14)</p>`;
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b || !$('#hub').contains(b)) return;
    if (b.dataset.act === 'grade') { pickGrade = !pickGrade; render(); return; }
    if (b.dataset.grade) { put('irae-grade', b.dataset.grade); pickGrade = false; render(); }
  });
  render();
  const ft = document.createElement('footer'); ft.innerHTML = CFG.footer || ''; $('#hub').after(ft);
  window.HUB_DEBUG = { render, myGrade };
})();

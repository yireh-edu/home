// 고3 영어 개념 (irae-src/concepts-*.js 에서 만든 파일)
window.QUIZ_CONCEPTS = {
 "s1": [
  {
   "unit": "수능 어법",
   "title": "주어-동사 수일치",
   "body": [
    "동사는 <b>진짜 주어</b>에 수를 맞춰요. 주어 뒤의 <b>전치사구, 관계절, 분사구</b>는 괄호로 묶고 건너뛰세요.",
    "<b>동명사, to부정사, 명사절</b>이 주어면 <b>단수</b> 동사를 써요.",
    "<b>The number of + 복수명사</b>는 단수 동사, <b>A number of + 복수명사</b>는 복수 동사예요.",
    "<b>each, every</b>는 단수 취급해요.",
    "<b>some of, most of, half of, the rest of</b> 뒤에서는 of 뒤의 명사에 수를 맞춰요."
   ],
   "tip": "주어와 동사 사이가 멀수록 함정이에요. 수식어를 지우고 주어와 동사만 남겨 보세요.",
   "examples": [
    {
     "en": "The books on the desk are mine.",
     "ko": "책상 위의 책들은 내 것이다."
    },
    {
     "en": "The woman who lives next door to my parents is a nurse.",
     "ko": "우리 부모님 옆집에 사는 그 여자는 간호사이다."
    },
    {
     "en": "Learning foreign languages takes time.",
     "ko": "외국어를 배우는 것은 시간이 걸린다."
    },
    {
     "en": "The number of tourists has increased.",
     "ko": "관광객의 수가 증가했다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "다음 중 어법상 <b>틀린</b> 것은?",
    "c": [
     "The books on the desk are mine.",
     "Reading books is good for you.",
     "A number of people were waiting.",
     "Each student has a locker.",
     "The boy with two dogs live next door."
    ],
    "a": 4,
    "sol": "주어는 The boy(단수)이고 with two dogs는 수식어예요. live가 아니라 lives가 맞아요."
   }
  },
  {
   "unit": "수능 어법",
   "title": "능동 vs 수동 판단",
   "body": [
    "주어가 동작을 <b>하면 능동</b>, 동작을 <b>받으면 수동(be + p.p.)</b>이에요.",
    "타동사 뒤에 <b>목적어가 있으면</b> 대개 능동, <b>목적어가 없으면</b> 수동일 가능성이 커요.",
    "<b>happen, occur, appear, disappear, remain, arise, consist of</b> 같은 자동사는 <b>수동태로 쓸 수 없어요</b>.",
    "분사도 마찬가지예요. 꾸밈 받는 명사가 하면 <b>-ing</b>, 당하면 <b>p.p.</b>예요."
   ],
   "tip": "감정 동사(surprise, interest, bore)는 감정을 일으키면 -ing, 느끼면 p.p.예요.",
   "examples": [
    {
     "en": "The bridge was built in 1990.",
     "ko": "그 다리는 1990년에 지어졌다."
    },
    {
     "en": "A strange thing happened yesterday.",
     "ko": "어제 이상한 일이 일어났다."
    },
    {
     "en": "The problem remains unsolved.",
     "ko": "그 문제는 해결되지 않은 채로 남아 있다."
    },
    {
     "en": "I was bored because the movie was boring.",
     "ko": "영화가 지루해서 나는 지루했다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "다음 중 어법상 <b>틀린</b> 것은?",
    "c": [
     "The letter was written in English.",
     "The bridge was built in 1990.",
     "The accident was happened last night.",
     "A strange thing happened yesterday.",
     "The problem remains unsolved."
    ],
    "a": 2,
    "sol": "happen은 자동사라서 수동태로 쓸 수 없어요. The accident happened last night.가 맞아요."
   }
  },
  {
   "unit": "수능 어법",
   "title": "대명사 수일치와 재귀대명사",
   "body": [
    "대명사는 가리키는 명사와 <b>수</b>를 맞춰요. 단수면 <b>it, its, that</b>, 복수면 <b>they, their, those</b>예요.",
    "비교 구문에서 앞의 명사를 다시 받을 때 <b>that(단수)</b>과 <b>those(복수)</b>를 써요.",
    "목적어가 주어와 <b>같은 대상</b>이면 <b>재귀대명사(-self, -selves)</b>를 써요.",
    "주어와 다른 대상이면 일반 목적격(him, them 등)을 써요."
   ],
   "tip": "대명사가 나오면 무엇을 가리키는지 앞에서 명사를 찾아 단수·복수를 확인하세요.",
   "examples": [
    {
     "en": "The climate of Korea is milder than that of Russia.",
     "ko": "한국의 기후는 러시아의 기후보다 온화하다."
    },
    {
     "en": "The ears of a rabbit are longer than those of a cat.",
     "ko": "토끼의 귀는 고양이의 귀보다 길다."
    },
    {
     "en": "She looked at herself in the mirror.",
     "ko": "그녀는 거울 속의 자기 자신을 보았다."
    },
    {
     "en": "Plants need sunlight to make their food.",
     "ko": "식물은 양분을 만들기 위해 햇빛이 필요하다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "빈칸에 알맞은 것은? <span class=\"sentence\">The ears of a rabbit are longer than ___ of a cat.</span>",
    "c": [
     "that",
     "those",
     "it",
     "them",
     "this"
    ],
    "a": 1,
    "sol": "앞의 복수명사 The ears를 다시 받으므로 those를 써요."
   }
  },
  {
   "unit": "수능 어법",
   "title": "형용사 vs 부사",
   "body": [
    "<b>look, sound, feel, smell, taste, seem, become, remain</b> 같은 2형식 동사 뒤에는 보어로 <b>형용사</b>를 써요.",
    "<b>keep, make, find, leave</b> + 목적어 뒤의 목적격보어도 <b>형용사</b>를 써요.",
    "동사, 형용사, 다른 부사, 문장 전체를 꾸밀 때는 <b>부사</b>를 써요.",
    "뜻이 다른 짝을 조심하세요: <b>hard</b>(열심히) / <b>hardly</b>(거의 ~않다), <b>late</b>(늦게) / <b>lately</b>(최근에), <b>high</b>(높이) / <b>highly</b>(매우)"
   ],
   "tip": "보어 자리면 형용사, 수식하는 자리면 부사예요. 문장 성분부터 따져 보세요.",
   "examples": [
    {
     "en": "The soup smells good.",
     "ko": "그 수프는 냄새가 좋다."
    },
    {
     "en": "He spoke very quietly.",
     "ko": "그는 매우 조용히 말했다."
    },
    {
     "en": "Please keep your room clean.",
     "ko": "방을 깨끗하게 유지해 주세요."
    },
    {
     "en": "I could hardly believe my eyes.",
     "ko": "나는 내 눈을 거의 믿을 수 없었다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "다음 중 어법상 <b>틀린</b> 것은?",
    "c": [
     "The soup smells good.",
     "He spoke very quietly.",
     "Keep your room clean.",
     "The music sounds beautifully.",
     "She found the book easy."
    ],
    "a": 3,
    "sol": "sound는 2형식 동사라서 보어로 형용사를 써요. The music sounds beautiful.이 맞아요."
   }
  },
  {
   "unit": "수능 어법",
   "title": "관계대명사 what vs that",
   "body": [
    "<b>what</b>은 선행사를 품은 관계대명사로 \"~하는 것\"(= the thing which)이라는 뜻이에요. 앞에 <b>선행사가 없어요</b>.",
    "관계대명사 <b>that</b>은 앞에 <b>선행사가 있고</b>, 뒤에 <b>불완전한 문장</b>이 와요.",
    "접속사 <b>that</b>은 선행사가 없고, 뒤에 <b>완전한 문장</b>이 와요.",
    "정리: 선행사 없음 + 불완전 = <b>what</b> / 선행사 있음 + 불완전 = <b>that(which, who)</b> / 선행사 없음 + 완전 = <b>접속사 that</b>"
   ],
   "tip": "빈칸 앞에 명사가 있는지, 뒤에 빠진 성분(주어·목적어)이 있는지 두 가지만 확인하세요.",
   "examples": [
    {
     "en": "What he said was true.",
     "ko": "그가 말한 것은 사실이었다."
    },
    {
     "en": "This is the book that I bought yesterday.",
     "ko": "이것은 내가 어제 산 책이다."
    },
    {
     "en": "I know that she is telling the truth.",
     "ko": "나는 그녀가 사실을 말하고 있다는 것을 안다."
    },
    {
     "en": "Show me what you have in your hand.",
     "ko": "네 손에 가지고 있는 것을 보여 줘."
    }
   ],
   "check": {
    "t": "mc",
    "q": "빈칸에 알맞은 것은? <span class=\"sentence\">___ surprised me most was his honesty.</span>",
    "c": [
     "That",
     "What",
     "Which",
     "It",
     "Who"
    ],
    "a": 1,
    "sol": "앞에 선행사가 없고 뒤에 주어가 빠진 불완전한 문장이므로 \"~한 것\"의 What을 써요."
   }
  }
 ],
 "s2": [
  {
   "unit": "수능 어법",
   "title": "동사 vs 준동사 판단",
   "body": [
    "한 문장(절)에는 <b>동사가 하나</b>만 있어요. 접속사나 관계사가 하나 늘 때마다 동사도 하나 늘 수 있어요.",
    "이미 문장의 동사가 있으면, 다른 동사 자리는 <b>준동사(to부정사, 동명사, 분사)</b>여야 해요.",
    "반대로 문장에 동사가 없으면, 밑줄 친 부분이 <b>동사</b>가 되어야 해요.",
    "수능에서는 주어 뒤에 긴 수식어가 붙어 동사가 있는지 없는지 헷갈리게 만드는 문제가 많아요."
   ],
   "tip": "동사 수 = 접속사(관계사) 수 + 1. 이 공식을 확인하는 습관을 들이세요.",
   "examples": [
    {
     "en": "The man sitting next to me on the bus was very kind.",
     "ko": "버스에서 내 옆에 앉아 있던 남자는 매우 친절했다."
    },
    {
     "en": "To keep a diary every day is not easy.",
     "ko": "매일 일기를 쓰는 것은 쉽지 않다."
    },
    {
     "en": "The students living in the dormitory have to return by ten.",
     "ko": "기숙사에 사는 학생들은 10시까지 돌아와야 한다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "빈칸에 알맞은 것은? <span class=\"sentence\">The man ___ next to me on the bus was very kind.</span>",
    "c": [
     "sit",
     "sat",
     "sitting",
     "sits",
     "was sitting"
    ],
    "a": 2,
    "sol": "문장의 동사 was가 이미 있으므로 빈칸은 The man을 꾸미는 준동사(분사) sitting이어야 해요."
   }
  },
  {
   "unit": "수능 어법",
   "title": "대동사와 생략",
   "body": [
    "앞에 나온 <b>일반동사</b>를 반복하지 않고 <b>do, does, did</b>로 받는 것을 <b>대동사</b>라고 해요.",
    "앞의 동사가 <b>be동사</b>면 be동사로, <b>조동사</b>면 그 조동사로 받아요.",
    "대동사는 주어의 수와 시제에 맞춰 써요.",
    "반복되는 말은 생략할 수 있어요. 부사절에서 <b>주어 + be동사</b>는 주절의 주어와 같을 때 생략하기도 해요. (When <b>young</b>, ...)"
   ],
   "tip": "앞 문장의 동사 종류(be / 일반동사 / 조동사)를 먼저 확인하세요.",
   "examples": [
    {
     "en": "He runs faster than I do.",
     "ko": "그는 나보다 더 빨리 달린다."
    },
    {
     "en": "She is taller than her sister is.",
     "ko": "그녀는 언니보다 키가 더 크다."
    },
    {
     "en": "I can swim, and so can my brother.",
     "ko": "나는 수영을 할 수 있고, 내 동생도 할 수 있다."
    },
    {
     "en": "When young, he lived in a small village.",
     "ko": "어렸을 때 그는 작은 마을에 살았다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "빈칸에 알맞은 것은? <span class=\"sentence\">My sister likes music more than I ___.</span>",
    "c": [
     "do",
     "am",
     "does",
     "is",
     "have"
    ],
    "a": 0,
    "sol": "앞의 일반동사 likes를 대신하고 주어가 I이므로 대동사 do를 써요."
   }
  },
  {
   "unit": "수능 어법",
   "title": "접속사 vs 전치사",
   "body": [
    "<b>접속사</b> 뒤에는 <b>주어 + 동사</b>가 있는 절이 오고, <b>전치사</b> 뒤에는 <b>명사(구)</b>나 동명사가 와요.",
    "이유: <b>because</b> + 절 / <b>because of, due to</b> + 명사",
    "양보: <b>although, though, even though</b> + 절 / <b>despite, in spite of</b> + 명사",
    "기간: <b>while</b> + 절 / <b>during</b> + 명사"
   ],
   "tip": "despite of는 틀린 표현이에요. despite 또는 in spite of로 써요.",
   "examples": [
    {
     "en": "The game was canceled because of the heavy rain.",
     "ko": "폭우 때문에 경기가 취소되었다."
    },
    {
     "en": "The game was canceled because it rained heavily.",
     "ko": "비가 많이 와서 경기가 취소되었다."
    },
    {
     "en": "Despite his efforts, he failed the test.",
     "ko": "노력에도 불구하고 그는 시험에 떨어졌다."
    },
    {
     "en": "I fell asleep during the movie.",
     "ko": "나는 영화를 보는 동안 잠이 들었다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "빈칸에 알맞은 것은? <span class=\"sentence\">___ the heavy rain, the game continued.</span>",
    "c": [
     "Although",
     "Despite",
     "Because",
     "Even though",
     "While"
    ],
    "a": 1,
    "sol": "뒤에 명사구(the heavy rain)만 있으므로 전치사 Despite를 써요. 나머지는 접속사예요."
   }
  },
  {
   "unit": "수능 구문",
   "title": "긴 문장에서 주어와 동사 찾기",
   "body": [
    "긴 문장은 먼저 <b>본동사</b>를 찾고, 그 앞부분 전체를 <b>주어</b>로 묶어 보세요.",
    "주어 뒤의 <b>전치사구, 관계절, 분사구, to부정사, 동격절</b>은 괄호로 묶어 수식어로 처리해요.",
    "<b>It</b>이 가주어이면 진짜 주어는 뒤의 <b>to부정사</b>나 <b>that절</b>이에요.",
    "<b>명사절(What ~, That ~, Whether ~)</b>이 주어일 때는 그 절이 끝나는 곳 다음에 본동사가 나와요."
   ],
   "tip": "접속사·관계사 안에 있는 동사는 본동사가 아니에요. 그 절 밖에 있는 동사를 찾으세요.",
   "examples": [
    {
     "en": "The idea that we can learn without effort seems attractive to many students.",
     "ko": "노력 없이 배울 수 있다는 생각은 많은 학생들에게 매력적으로 보인다."
    },
    {
     "en": "People who exercise regularly tend to sleep better.",
     "ko": "규칙적으로 운동하는 사람들은 잠을 더 잘 자는 경향이 있다."
    },
    {
     "en": "It is important to get enough rest before an exam.",
     "ko": "시험 전에 충분히 쉬는 것이 중요하다."
    },
    {
     "en": "What matters most is how you treat others.",
     "ko": "가장 중요한 것은 네가 다른 사람들을 어떻게 대하는가이다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "다음 문장 전체의 본동사는? <span class=\"sentence\">The idea that we can learn without effort seems attractive to many students.</span>",
    "c": [
     "learn",
     "seems",
     "idea",
     "can learn",
     "attractive"
    ],
    "a": 1,
    "sol": "that we can learn without effort는 The idea를 설명하는 동격절이에요. 문장 전체의 동사는 seems예요."
   }
  },
  {
   "unit": "수능 어법",
   "title": "관계대명사 vs 관계부사",
   "body": [
    "<b>관계대명사(which, who, that)</b> 뒤에는 주어나 목적어가 빠진 <b>불완전한 문장</b>이 와요.",
    "<b>관계부사(where, when, why)</b> 뒤에는 빠진 것이 없는 <b>완전한 문장</b>이 와요.",
    "<b>전치사 + 관계대명사</b>는 관계부사와 같은 역할을 하므로 뒤에 <b>완전한 문장</b>이 와요.",
    "선행사가 장소라고 무조건 where를 쓰지 않아요. 뒤 문장이 불완전하면 <b>which</b>를 써요."
   ],
   "tip": "the town where I was born (완전) / the town which I visited (visited의 목적어가 빠짐)",
   "examples": [
    {
     "en": "This is the town where I was born.",
     "ko": "이곳은 내가 태어난 마을이다."
    },
    {
     "en": "This is the town which I visited last year.",
     "ko": "이곳은 내가 작년에 방문한 마을이다."
    },
    {
     "en": "I will never forget the summer when we traveled to Jeju.",
     "ko": "나는 우리가 제주도로 여행 갔던 여름을 절대 잊지 못할 것이다."
    },
    {
     "en": "The office in which she works is on the tenth floor.",
     "ko": "그녀가 일하는 사무실은 10층에 있다."
    }
   ],
   "check": {
    "t": "mc",
    "q": "빈칸에 알맞은 것은? <span class=\"sentence\">This is the village ___ my grandfather was born.</span>",
    "c": [
     "which",
     "where",
     "what",
     "who",
     "whose"
    ],
    "a": 1,
    "sol": "선행사가 장소이고 뒤가 완전한 문장(my grandfather was born)이므로 관계부사 where를 써요."
   }
  }
 ]
};

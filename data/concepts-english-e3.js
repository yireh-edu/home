// 초3 영어 개념 (irae-src/concepts-*.js 에서 만든 파일)
window.QUIZ_CONCEPTS = {
 "s1": [
  {
   "unit": "파닉스",
   "title": "짧은 모음 단어 읽기",
   "body": [
    "<b>자음 + 모음 + 자음</b>으로 된 짧은 단어는 소리를 이어서 읽어요.",
    "<b>c-a-t</b>는 \"크-애-트\"를 빨리 이어 <b>cat</b>이 돼요.",
    "모음 하나만 바꾸면 다른 단어가 돼요: <b>bag</b>(가방), <b>beg</b>(부탁하다), <b>big</b>(큰), <b>bug</b>(벌레)."
   ],
   "tip": "가운데 모음 소리를 잘 들으면 단어를 정확히 쓸 수 있어요.",
   "examples": [
    {
     "en": "The cat is on the mat.",
     "ko": "고양이가 매트 위에 있어요."
    },
    {
     "en": "A big bug is in the bag.",
     "ko": "큰 벌레가 가방 안에 있어요."
    }
   ],
   "check": {
    "t": "mc",
    "q": "\"애\" 소리가 나는 모음이 들어간 단어는?",
    "c": [
     "hat",
     "hot",
     "hit",
     "hut",
     "pen"
    ],
    "a": 0,
    "sol": "짧은 a는 \"애\" 소리예요. hat(모자)에 a가 들어 있어요."
   }
  },
  {
   "unit": "인사와 소개",
   "title": "be동사 am, is, are",
   "body": [
    "<b>be동사</b>는 \"~이다, ~에 있다\"라는 뜻이에요.",
    "주어에 따라 모양이 바뀌어요: <b>I am</b>, <b>You are</b>, <b>He / She / It is</b>, <b>We / They are</b>.",
    "줄여서 <b>I'm, You're, He's, She's, It's</b>로도 써요."
   ],
   "tip": "주어가 한 사람(he, she)이나 하나(it)면 is를 써요.",
   "examples": [
    {
     "en": "I am a student.",
     "ko": "나는 학생이에요."
    },
    {
     "en": "She is my sister.",
     "ko": "그녀는 내 여동생이에요."
    },
    {
     "en": "They are happy.",
     "ko": "그들은 행복해요."
    }
   ],
   "check": {
    "t": "mc",
    "q": "빈칸에 알맞은 말은? <span class=\"sentence\">Tom ___ my friend.</span>",
    "c": [
     "am",
     "are",
     "is",
     "be",
     "were"
    ],
    "a": 2,
    "sol": "Tom은 한 사람(he)이므로 is를 써요."
   }
  },
  {
   "unit": "사람 말하기",
   "title": "인칭대명사 I, you, he, she",
   "body": [
    "사람이나 물건의 이름 대신 쓰는 말을 <b>대명사</b>라고 해요.",
    "<b>I</b>(나), <b>you</b>(너, 너희), <b>he</b>(그 남자), <b>she</b>(그 여자), <b>it</b>(그것)이에요.",
    "여럿일 때는 <b>we</b>(우리), <b>they</b>(그들, 그것들)를 써요.",
    "<b>I</b>는 문장 어디에 있어도 항상 대문자로 써요."
   ],
   "examples": [
    {
     "en": "This is Jun. He is tall.",
     "ko": "이 아이는 준이에요. 그는 키가 커요."
    },
    {
     "en": "This is Yuna. She is kind.",
     "ko": "이 아이는 유나예요. 그녀는 친절해요."
    },
    {
     "en": "Mina and I are friends. We are nine.",
     "ko": "미나와 나는 친구예요. 우리는 아홉 살이에요."
    }
   ],
   "check": {
    "t": "mc",
    "q": "밑줄 친 말 대신 쓸 수 있는 것은? <span class=\"sentence\"><u>My mom</u> is a teacher.</span>",
    "c": [
     "He",
     "She",
     "It",
     "They",
     "We"
    ],
    "a": 1,
    "sol": "엄마는 여자 한 명이므로 She를 써요."
   }
  },
  {
   "unit": "물건 말하기",
   "title": "a와 an",
   "body": [
    "물건 하나를 말할 때 단어 앞에 <b>a</b>를 붙여요: <b>a dog</b>, <b>a book</b>.",
    "모음 소리(a, e, i, o, u)로 시작하는 단어 앞에는 <b>an</b>을 붙여요: <b>an apple</b>, <b>an egg</b>.",
    "<b>a</b>와 <b>an</b>은 둘 다 \"하나의\"라는 뜻이에요."
   ],
   "tip": "an orange, an umbrella처럼 첫소리가 모음이면 an이에요.",
   "examples": [
    {
     "en": "I have an apple.",
     "ko": "나는 사과 하나가 있어요."
    },
    {
     "en": "It's a dog.",
     "ko": "그것은 개예요."
    },
    {
     "en": "This is an egg.",
     "ko": "이것은 달걀이에요."
    }
   ],
   "check": {
    "t": "mc",
    "q": "빈칸에 <b>an</b>이 들어가는 것은?",
    "c": [
     "___ cat",
     "___ ball",
     "___ orange",
     "___ pen",
     "___ desk"
    ],
    "a": 2,
    "sol": "orange는 모음 o 소리로 시작하므로 an orange예요."
   }
  }
 ],
 "s2": [
  {
   "unit": "교실 영어",
   "title": "명령문 (~해, ~하지 마)",
   "body": [
    "\"~해라\"라고 말할 때는 주어 없이 <b>동사</b>로 시작해요: <b>Sit down.</b>, <b>Open the door.</b>",
    "부드럽게 말하려면 <b>please</b>를 붙여요: <b>Please sit down.</b>",
    "\"~하지 마\"는 앞에 <b>Don't</b>를 붙여요: <b>Don't run.</b>"
   ],
   "examples": [
    {
     "en": "Stand up, please.",
     "ko": "일어나 주세요."
    },
    {
     "en": "Open your book.",
     "ko": "책을 펴세요."
    },
    {
     "en": "Don't run in the classroom.",
     "ko": "교실에서 뛰지 마세요."
    }
   ],
   "check": {
    "t": "mc",
    "q": "\"창문을 열지 마.\"를 바르게 쓴 것은?",
    "c": [
     "Open the window.",
     "Don't open the window.",
     "Not open the window.",
     "You open the window.",
     "No open the window."
    ],
    "a": 1,
    "sol": "\"~하지 마\"는 Don't + 동사로 써요."
   }
  },
  {
   "unit": "할 수 있는 것",
   "title": "can, can't",
   "body": [
    "\"~할 수 있다\"는 <b>can + 동사</b>로 말해요: <b>I can swim.</b>",
    "\"~할 수 없다\"는 <b>can't</b>(cannot)를 써요: <b>I can't skate.</b>",
    "물을 때는 <b>Can you ~?</b>, 대답은 <b>Yes, I can.</b> / <b>No, I can't.</b>예요.",
    "can 뒤의 동사는 모양이 바뀌지 않아요. <b>He can swim.</b> (swims 아님)"
   ],
   "examples": [
    {
     "en": "I can ride a bike.",
     "ko": "나는 자전거를 탈 수 있어요."
    },
    {
     "en": "Can you swim?",
     "ko": "너는 수영할 수 있니?"
    },
    {
     "en": "No, I can't.",
     "ko": "아니, 못 해."
    }
   ],
   "check": {
    "t": "mc",
    "q": "바른 문장은?",
    "c": [
     "She can dances.",
     "She cans dance.",
     "She can dance.",
     "She can to dance.",
     "She dance can."
    ],
    "a": 2,
    "sol": "can 뒤에는 동사원형을 써요: She can dance."
   }
  },
  {
   "unit": "수 세기",
   "title": "여러 개 (복수형)와 How many",
   "body": [
    "두 개 이상이면 단어 끝에 <b>-s</b>를 붙여요: <b>one book → two books</b>.",
    "<b>s, x, ch, sh</b>로 끝나면 <b>-es</b>를 붙여요: <b>box → boxes</b>.",
    "개수를 물을 때는 <b>How many ~s?</b>(~이 몇 개니?)라고 해요."
   ],
   "tip": "How many 뒤에는 복수형을 써요. How many apples? (apple 아님)",
   "examples": [
    {
     "en": "How many apples?",
     "ko": "사과가 몇 개니?"
    },
    {
     "en": "Three apples.",
     "ko": "사과 세 개."
    },
    {
     "en": "I have two boxes.",
     "ko": "나는 상자가 두 개 있어요."
    }
   ],
   "check": {
    "t": "short",
    "q": "빈칸에 알맞은 단어를 쓰세요. <span class=\"sentence\">How ___ pencils do you have?</span>",
    "a": "many",
    "sol": "개수를 물을 때는 How many ~?를 써요."
   }
  },
  {
   "unit": "확인하기",
   "title": "Is it ~? / Are you ~?",
   "body": [
    "be동사 문장을 물을 때는 <b>be동사를 맨 앞</b>으로 보내요: <b>It is a cat. → Is it a cat?</b>",
    "대답은 <b>Yes, it is.</b> 또는 <b>No, it isn't.</b>라고 해요.",
    "<b>Are you ~?</b>로 물으면 <b>Yes, I am.</b> / <b>No, I'm not.</b>으로 대답해요."
   ],
   "examples": [
    {
     "en": "Is it a cat?",
     "ko": "그것은 고양이니?"
    },
    {
     "en": "Yes, it is.",
     "ko": "응, 맞아."
    },
    {
     "en": "Are you hungry? No, I'm not.",
     "ko": "너 배고프니? 아니, 안 고파."
    }
   ],
   "check": {
    "t": "mc",
    "q": "<span class=\"sentence\">Are you a student?</span> 에 \"응, 그래.\"라고 답하는 말은?",
    "c": [
     "Yes, you are.",
     "Yes, I am.",
     "Yes, I do.",
     "Yes, it is.",
     "Yes, I can."
    ],
    "a": 1,
    "sol": "Are you ~?로 물으면 Yes, I am.으로 대답해요."
   }
  }
 ]
};

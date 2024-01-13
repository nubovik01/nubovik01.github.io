// code by qwkrtezzz (github.com/nubovik01)
// file created at 17 January 2022 02:53:49 AM (UTC+3)
// v2.0 writted at 14 January 2024 12:04:23 AM (UTC+3)

const phrasesList = [
  {
    text: "я дед инсайд, мне 9 лет, я хочу в психокидс",
    meta: {
      enabled: false
    }
  },
  {
    text: "/беднi/груснi/нещаснi/уставшi/паломанi/псiх/галоднi/бальної/",
    meta: {
      enabled: false
    }
  },
  {
    text: "в глазах твоих я вижу печаль...",
    meta: {
      enabled: true
    }
  },
  {
    text: "возвращаем эру гулей и дед инсайдиков день #" + differenceInTime('2023-06-13'),
    meta: {
      enabled: true
    }
  },
  {
    text: "руки немеют, кажется им пизда.",
    meta: {
      enabled: false
    }
  },
  {
    text: "потерял весь мир, забыл себя, я тону в омуте",
    meta: {
      enabled: true
    }
  },
  {
    text: "глаза как у ребёнка, и я забываю голос твой",
    meta: {
      enabled: true
    }
  },
  {
    text: "и если ты растаешь, я зажгу снова пожар...",
    meta: {
      enabled: true
    }
  },
  {
    text: "и даже в самой худшей ссоре, умоляю, не уйди...",
    meta: {
      enabled: true
    }
  },
  {
    text: "мне хочется спать, но я не смогу тут уснуть...",
    meta: {
      enabled: true
    }
  },
  {
    text: "шни шна шнапи шнапи шнапи шнап",
    meta: {
      enabled: false
    }
  },
  {
    text: "я экстремист",
    meta: {
      enabled: true
    }
  },
  {
    text: "more about flameout here - t.me/flameoutupdates",
    meta: {
      enabled: false
    }
  },
  ////////////////////////////////////////////////////////////////
  {
    text: "жертва стокгольмского синдрома",
    meta: {
      enabled: true
    }
  },
  {
    text: "я люблю рояльку!!<3", // is there hope? umm, I think not
    meta: {
      enabled: false
    }
  },
  {
    text: "iluvrldv1",
    meta: {
      enabled: false
    }
  },
  {
    text: "трахни меня, рояль!",
    meta: {
      enabled: false
    }
  },
  ////////////////////////////////////////////////////////////////
  {
    text: "я пообедал и мне стало уютненько",
    meta: {
      enabled: false
    }
  },
  {
    text: "мы поколение амням",
    meta: {
      enabled: false
    }
  },
  {
    text: "\"Никита выдал базу.\"",
    meta: {
      enabled: true
    }
  },
  {
    text: "donate me: qiwi.com/n/nubovik'",
    meta: {
      enabled: true
    }
  },
  {
    text: "i luv js",
    meta: {
      enabled: false
    }
  },
  {
    text: "них#я что это щас было",
    meta: {
      enabled: false
    }
  },
  {
    text: "я слабенький немощный хиленький",
    meta: {
      enabled: true
    }
  },
  {
    text: "кот застрял на дереве...",
    meta: {
      enabled: false
    }
  },
  {
    text: "ай-яйй, остался тут один...",
    meta: {
      enabled: false
    }
  },
  {
    text: "до нового года осталось"
      + differenceInTime(new Date().getFullYear() + '-12-31').toString().replace('-', '')
      + " дней",
    meta: {
      enabled: true,
      months: [10, 11, 12]
    }
  },
  {
    text: "мы сидим в дискордике, скинь мне ножки, суч#а",
    meta: {
      enabled: false
    }
  },
  {
    text: "so f3ck1ng psycho 🥱",
    meta: {
      enabled: false
    }
  },
  {
    text: "you cannot escape the boykisser",
    meta: {
      enabled: false
    }
  },
  {
    text: "oooooo you like boys ur a boykisser",
    meta: {
      enabled: false
    }
  },
  {
    text: "i like javascript",
    meta: {
      enabled: false
    }
  },
  {
    text: "t.me/minitypebot",
    meta: {
      enabled: false
    }
  },
  {
    text: "мы стреляем сигареты, мы малы как Ватикан.",
    meta: {
      enabled: true
    }
  },
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  {
    text: "хватит голову мою дурачить.",
    meta: {
      enabled: false
    }
  },
  {
    text: "я хочу сбежать, но ноги никак не идут...",
    meta: {
      enabled: true
    }
  },
  {
    text: "я бы узнал тебя среди других в этой толпе...",
    meta: {
      enabled: false
    }
  },
  {
    text: "она спросит как у меня дела, а я отвечу что у меня как всегда",
    meta: {
      enabled: true
    }
  },
  {
    text: "лучше просто от меня улетай...",
    meta: {
      enabled: false
    }
  },
  {
    text: "внутри пустота, больше не чувствую боли.",
    meta: {
      enabled: true
    }
  },
  {
    text: "при виде тебя меня сразу же бросает в холод",
    meta: {
      enabled: true
    }
  },
  {
    text: "я ненавижу свою жизнь.",
    meta: {
      enabled: false
    }
  },
  {
    text: "ты не узнаешь, как мне больно",
    meta: {
      enabled: true
    }
  },
  {
    text: "каждый раз пытался согреться, но всё зря.",
    meta: {
      enabled: true
    }
  },
  {
    text: "холод внутри заставляет больше полюбить себя.",
    meta: {
      enabled: true
    }
  },
  {
    text: "на улице зима, холод меня убьёт",
    meta: {
      enabled: true,
      months: [11, 12, 1, 2]
    }
  },
  {
    text: "мне кажется я мёртв, и мне нужно больше тепла.",
    meta: {
      enabled: true
    }
  },
  {
    text: "убегай от меня.",
    meta: {
      enabled: false
    }
  },
  {
    text: "я хотел тебя забыть, но ты приходишь мне во снах",
    meta: {
      enabled: true
    }
  },
  {
    text: "мы непременно распадёмся по частичам",
    meta: {
      enabled: false
    }
  },
  {
    text: "мне так плохо когда тебя нет рядом",
    meta: {
      enabled: true
    }
  },
  {
    text: "бывает больно, но я знаю, всё пройдёт.",
    meta: {
      enabled: true
    }
  },
  {
    text: "все твои слёзы превращаю в лёд.",
    meta: {
      enabled: true,
      months: [1, 2, 3, 9, 10, 11, 12]
    }
  },
  {
    text: "я зимнее солнце, и я появляюсь всё реже и реже",
    meta: {
      enabled: false
    }
  },
  {
    text: "ты боишься меня, ведь мои поцелуи как нож тебя режут.",
    meta: {
      enabled: false
    }
  },
  {
    text: "я стою на крыше и смотрю на твои фото",
    meta: {
      enabled: true
    }
  },
  {
    text: "я бы украл тебя, даже если бы пришлость сесть",
    meta: {
      enabled: true
    }
  },
  {
    text: "твой голос согревает сладко, его слышу лишь во снах",
    meta: {
      enabled: true
    }
  },
  {
    text: "как к тебе я отношусь - в твоём обличии очнусь",
    meta: {
      enabled: true
    }
  },
  {
    text: "я в своих мыслях утопаю, не могу найти себя",
    meta: {
      enabled: true
    }
  },
  {
    text: "все всегда против меня, пойду поплачу твоей маме.",
    meta: {
      enabled: true
    }
  },
  {
    text: "я не знаю что мне делать, как мне полюбить себя?",
    meta: {
      enabled: true
    }
  },
  {
    text: "думаю о суициде, мы увидимся во снах",
    meta: {
      enabled: true
    }
  },
  {
    text: "просыпаюсь сразу в тильте",
    meta: {
      enabled: false,
      months: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  },
  {
    text: "ненавижу этот мир, он меня не понимает.",
    meta: {
      enabled: false
    }
  },
  {
    text: "ты забрал больное сердце и его мне не вернуть",
    meta: {
      enabled: true
    }
  },
  {
    text: "твои глаза - цвет океана, я запомнил навсегда",
    meta: {
      enabled: true
    }
  },
  {
    text: "я спрячу сердце и его никто не найдёт.",
    meta: {
      enabled: true
    }
  },
  {
    text: "они смотрят на меня как будто я плохой",
    meta: {
      enabled: true
    }
  },
  {
    text: "вчера я плакал всю ночь...",
    meta: {
      enabled: false
    }
  },
  {
    text: "все свои мысли удаляю, эмоции гружу в icloud",
    meta: {
      enabled: false
    }
  },
  {
    text: "я люблю запах слёз",
    meta: {
      enabled: false
    }
  },
  {
    text: "мы с тобой не поймём друг друга никогда.",
    meta: {
      enabled: true
    }
  },
  {
    text: "увидимся в воскресенье",
    meta: {
      enabled: true
    }
  },
  {
    text: "обними меня, мне страшно...",
    meta: {
      enabled: false
    }
  },
  {
    text: "на школьной дискотеке я танцую хайперпоп",
    meta: {
      enabled: true
    }
  },
  {
    text: "я бездарен и никому не нужен",
    meta: {
      enabled: false
    }
  },
  {
    text: "я не забыл все те моменты когда я был полон чувств",
    meta: {
      enabled: true
    }
  },
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  {
    text: "факт: в 2021 никита сделал 2787 коммитов на github",
    meta: {
      enabled: false
    }
  },
  {
    text: "meow^^",
    meta: {
      enabled: false
    }
  },
  {
    text: "я сфотографирую е#ало, чтобы ты узнала... с#ка, чтобы ты узнала, кого ты потеряла...",
    meta: {
      enabled: false
    }
  },
  {
    text: "вам тоже не нравится реклама? :33",
    meta: {
      enabled: false
    }
  },
  {
    text: "я вас всех забаню хуесосы!, — Екатерина Мизулина",
    meta: {
      enabled: false
    }
  },
  {
    text: "..o_O",
    meta: {
      enabled: false
    }
  },
  {
    text: "t.me/nyannnbot",
    meta: {
      enabled: true
    }
  },
  {
    text: "t.me/flameoutupdates",
    meta: {
      enabled: false
    }
  },
  {
    text: "подписывайтесь на тгк: t.me/nbvkxd",
    meta: {
      enabled: true
    }
  },
  {
    text: "как вам снегопад на сайте?",
    meta: {
      enabled: true,
      months: [12, 1, 2]
    }
  },
  {
    text: "Made in Russia w/ <3",
    meta: {
      enabled: false
    }
  },
  {
    text: "aSBsaWtlIGJveXM=",
    meta: {
      enabled: false
    }
  },
  {
    text: "обнови страницу и этот текст изменится",
    meta: {
      enabled: false
    }
  },
  {
    text: "нажми на меня и этот текст изменится",
    meta: {
      enabled: false
    }
  },
  {
    text: "С Новым 2024 Годом, друзья!",
    meta: {
      enabled: true,
      months: [12, 1]
    }
  },
  {
    text: "я люблю милых фембойчиков каждому бы отдался",
    meta: {
      enabled: true
    }
  },
  {
    text: "бтв я кьювертез",
    meta: {
      enabled: true
    }
  }
];

function footerChangeText() {
  const footer = document.getElementById("footer-text");
  const phraseId = Math.floor(Math.random() * phrasesList.length);
  const phrase = phrasesList[phraseId];

  const monthNow = new Date().getMonth() + 1;

  const phraseWorkMonths = phrase.meta.months;

  const isIncludesMonth = phraseWorkMonths
    ? phraseWorkMonths.includes(monthNow)
    : true;

  const isEnabled = phrase.meta.enabled;

  const phraseText = phrase.text;

  const cookieWithPhraseId = Number(getCookie("footerId")) != phraseId;

  if (isEnabled && isIncludesMonth && phraseText && cookieWithPhraseId) {
    footer.innerHTML = phraseText;

    setCookie("footerId", phraseId, "forever");
  } else {
    console.log('Repeat the search to find a phrase with the necessary parameters for the footer.');
    footerChangeText();
  };
};
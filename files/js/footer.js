// code by qwkrtezzz (github.com/nubovik01)
// file created at 17 January 2022 02:53:49 AM (UTC+3)

const phrasesForFooter = [
  'я дед инсайд, мне 9 лет, я хочу в психокидс',
  '/беднi/груснi/нещаснi/уставшi/паломанi/псiх/галоднi/бальної/',
  // 'я бездарен и никому не нужен',
  // 'я пообедал и мне стало уютненько',
  // 'Made in Russia w/ <3',
  // 'факт: в 2021 никита сделал 2787 вкладов на github',
  // 't.me/minitypebot',
  // 'я люблю милых фембойчиков каждому бы отдался',
  // 'w-where are all the m-men?? i need men!',
  'возвращаем эру гулей и дед инсайдиков день #'+differenceInTime('2023-06-13'),
  // 'обнови страницу и этот текст изменится',
  // 'нажми на меня и этот текст изменится',
  'я люблю рояльчика!!<3',
  // 'i like javascript',
  'so f3ck1ng psycho 🥱',
  // 'мы сидим в дискордике, скинь мне ножки, суч#а',
  'до нового года осталось '+Number(differenceInTime(new Date().getFullYear()+'-12-31').toString().replace('-', ''))+' дней',
  // 'you cannot escape the boykisser',
  'я слабенький, немощный и хиленький',
  // 'них#я что это щас было',
  'подписывайтесь на тгк: t.me/nbvkxd',
  't.me/nyannnbot',
  't.me/flameoutupdates',
  // 'мы поколение амням',
  // -------------------------------------------------------------
  'ай-яйй, остался тут один',
  'сломанный ублюдок, я родился в рефлексии',
  'как к тебе я отношусь - в твоём обличии очнусь',
  'меня мучает невроз',
  'я в своих мыслях утопаю, не могу найти себя',
  'я не знаю что мне делать, как мне полюбить себя?',
  'думаю о суициде, мы увидимся во снах',
  'просыпаюсь сразу в тильте',
  'ненавижу этот мир, он меня не понимает',
  'как же мало денег у меня в карманах',
  'я ненавижу тебя, я ненавижу себя',
  'они смотрят на меня как будто я плохой',
  'вчера я плакал всю ночь...',
  'я люблю запах слёз',
  'мы с тобой не поймём друг друга никогда',
  'увидимся в воскресенье',
  'руки немеют, кажется им п#зда',
  'на школьной дискотеке я танцую хайперпоп',
  'я бездарен и никому не нужен',
  'все свои мысли удаляю, эмоции гружу в icloud',
  'я промок, я замёрз, я титаник',
  'хватит голову мою дурачить',
  'я не смогу без тебя...',
  'мне хочется спать',
  'лучше просто от меня улетай...',
  'потерял весь мир, забыл себя, я тону в омуте',
  'внутри пустота, больше не чувствую боли',
  'при виде тебя меня сразу же бросает в холод',
  'в глазах твоих я вижу печаль',
  'на улице зима, холод меня убьёт',
  'убегай от меня.',
  'мне так плохо когда тебя нет рядом',
  'я хотел тебя забыть но ты приходишь мне во снах',
  'мной овладевает страх...',
  'мы непременно распадёмся по частичам',
  'внутри так пусто...',
  'ты боишься меня, ведь мои поцелуи как нож тебя режут.',
  // -------------------------------------------------------------
  '"Никита выдал базу."',
  'donate me: qiwi.com/n/nubovik',
  // 'я сфотографирую е#ало, чтобы ты узнала... с#ка, чтобы ты узнала, кого ты потеряла...',
  // 'meow^^',
  // 'вам тоже не нравится реклама? :33',
  // '..o_O',
  // 'я вас всех забаню хуесосы!, — Екатерина Мизулина',
  'more about flameout here - t.me/flameoutupdates'
];

function footerChangeText() {
  document.getElementById("footer-text").innerHTML = phrasesForFooter[Math.floor(Math.random() * phrasesForFooter.length)];
};

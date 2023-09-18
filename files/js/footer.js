// code by t.me/qwkrtezzz
// file created at 17 January 2022 02:53:49 AM (UTC+3)

const isIphone = false;

function codeText(text) {
  // return `<code class="code-blue"><span class="code-text-white-1_5proc">${text}</span></code>`;
  return text;
};

const phrasesForFooter = [
  'я дед инсайд, мне 9 лет, я хочу в психокидс',
  '/беднi/груснi/нещаснi/уставшi/паломанi/псiх/галоднi/бальної/',
  'я бездарен и никому не нужен',
  'oooooo you like boys ur a boykisser',
  'я пообедал и мне стало уютненько',
  'Made in Russia w/ <3',
  'факт: в 2021 никита сделал 2787 вкладов на github',
  'все свои мысли удаляю, эмоции гружу в icloud, блять',
  't.me/minitypebot',
  'я люблю милых фембойчиков каждому бы отдался',
  'w-where are all the m-men?? i need men!',
  'я люблю рояльчика!!<3',
  'возвращаем эру гулей и дед инсайдиков день #'+differenceInTime('2023-06-13'),
  'обнови страницу и этот текст изменится',
  'нажми на меня и этот текст изменится',
  'i like javascript',
  'кот застрял на дереве...',
  'so f3ck1ng psycho 🥱',
  'мы сидим в дискордике, скинь мне ножки, суч#а',
  'до нового года осталось '+Number(differenceInTime(new Date().getFullYear()+'-12-31').toString().replace('-', ''))+' дней',
  'не говори мне, как хорошо тебе там, где меня нет',
  'you cannot escape the boykisser',
  'я слабенький немощный хиленький',
  'них#я что это щас было',
  'подписывайтесь на тгк: t.me/nubovikxd',
  'мы поколение амням',
  '"Никита выдал базу."',
  'donate me: qiwi.com/n/nubovik',
  'я сфотографирую е#ало, чтобы ты узнала... с#ка, чтобы ты узнала, кого ты потеряла...',
  'meow^^',
  'вам тоже не нравится реклама? :33',
  '..o_O',
  'я вас всех забаню хуесосы!, — Екатерина Мизулина',
  'more about flameout here - t.me/flameoutupdates'
];

function footerChangeText() {
  document.getElementById("footer-text").innerHTML = codeText(phrasesForFooter[Math.floor(Math.random() * phrasesForFooter.length)]);

  if (/iPhone/i.test(navigator.userAgent) && isIphone == false) {
    isIphone = true;
    document.getElementById("footer-text").innerHTML = 'айфончик 📱';
    console.log("User from iPhone :)");
  } else {
    console.log("Not iPhone :(");
  };
};
// Code by Nubovik
// Created: 01/17/2022 02:53

var isIphone = false;

function codeText(text) {
  // return `<code class="code-blue"><span class="code-text-white-1_5proc">${text}</span></code>`;
  return text;
};

var phrasesForFooter = [
  'я дед инсайд, мне 9 лет, я хочу в психокидс',
  'обними меня, мне страшно...',
  'amogus is sus',
  'я бездарен и никому не нужен',
  'oooooo you like boys ur a boykisser',
  'я люблю рояльчика!!<3',
  'Так на западе тоже трахаются, давайте в России запретим секс?',
  'я пообедал и мне стало уютненько',
  'iluvrldv1',
  'шни шна шнапи шнапи шнапи шнап',
  'я слабенький немощный хиленький',
  'Made in Russia w/ <3',
  'факт: в 2021 никита сделал 2787 вкладов на github',
  'aSBsaWtlIGJveXM=',
  '/беднi/груснi/нещаснi/уставшi/паломанi/псiх/галоднi/бальної/',
  'тильт, апатия, депрессия, холод...',
  'furry furry furry!',
  'я люблю милых фембойчиков каждому бы отдался',
  'w-where are all the m-men?? i need men!',
  '1000-7',
  'i like javascript',
  'кот застрял на дереве...',
  'на твоё каре по шею много <s>мальчиков</s> скинов смотрело...',
  'nothing.',
  'so f3ck1ng psycho 🥱',
  'мы сидим в дискордике, скинь мне ножки, сучка',
  'go kitty go!',
  'you cannot escape the boykisser',
  'нихуя что это щас было',
  'подписывайтесь на тгк: t.me/nubovikxd',
  'рыфвш8фы78гфы0в9офышщтфыгиыф',
  'мы поколение амням',
  'donate me: qiwi.com/n/nubovik',
  'meow^^',
  'вам тоже не нравится реклама? :33',
  '..o_O',
  'я вас всех забаню хуесосы!, — Екатерина Мизулина',
  't.me/minitypebot',
  'more about flameout here - t.me/flameoutupdates'
];

function footerChangeText() {
  document.getElementById("footer-text").innerHTML = codeText(phrasesForFooter[Math.floor(Math.random() * phrasesForFooter.length)]);

  if (/iPhone/i.test(navigator.userAgent) && isIphone == false) {
    isIphone = true;
    document.getElementById("footer-text").innerHTML = 'Привет, обладатель iPhone!';
    console.log("User from iPhone :)");
  } else {
    console.log("Not iPhone :(");
  };
};
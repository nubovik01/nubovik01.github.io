// Code by Nubovik
// Created: 01/17/2022 02:53

var isIphone = false;

function codeText(text) {
  // return `<code class="code-blue"><span class="code-text-white-1_5proc">${text}</span></code>`;
  return text;
}

var footer_texts = [
  'Cтраница слишком маленькая? Измените масштаб!',
  'я дед инсайд, мне 9 лет, я хочу в психокидс',
  'обними меня, мне страшно...',
  'чмоня', // kotik xd
  'amogus is sus',
  'Вам тоже не нравится реклама? Извините... :(',
  'Лёня в 15 метрах от вас хочет отношений',
  'you kidding me?',
  'я пообедал и мне стало уютненько',
  'iluvrldv1',
  'шни шна шнапи шнапи шнапи шнап',
  'furry furry furry!',
  'i luv js'
];

function footer_change_text() {
  document.getElementById("footer-text").innerHTML = codeText(footer_texts[Math.floor(Math.random() * footer_texts.length)]);

  if (/iPhone/i.test(navigator.userAgent) && isIphone == false) {
    isIphone = true;
    document.getElementById("footer-text").innerHTML = 'Привет, обладатель iPhone!';
    console.log("User from iPhone :)");
  } else {
    console.log("Not iPhone :(");
  }
}

// Code by Nubovik
// Created: 01/17/2022 02:53

var isIphone = false;

function codeText(text) {
  // return `<code class="code-blue"><span class="code-text-white-1_5proc">${text}</span></code>`;
  return text;
}

var footer_texts = [
  'Cтраница слишком маленькая? Измените масштаб!',
  'Вам тоже не нравится реклама? Извините... :(',
  'я дед инсайд, мне 9 лет, я хочу в психокидс',
  'обними меня, мне страшно...',
  'amogus is sus',
  'я пообедал и мне стало уютненько',
  'iluvrldv1',
  'трахни меня, рояль!',
  'шни шна шнапи шнапи шнапи шнап',
  'furry furry furry!',
  'i like javascript',
  'go kitty go!',
  'nikita is ga~.. w-what...'
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

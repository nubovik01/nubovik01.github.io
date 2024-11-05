// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 4 February 2024 12:41:22 PM (UTC+3)

// A.R.: /quotes.txt
const quotesList = [
  "HELLO my name is QWKRTEZZZ",
  "Я никогда не пытаюсь кому-то угодить",
  "на школьной дискотеке я танцую хайперпоп",
  "Смотри, там облако почти как дракон!",
  "Буду сиять, надеюсь меня кто-нибудь увидит...",
  "Бывает больно, но я знаю, всё пройдёт",
  "Я боюсь, что ты-ы-ы даришь всем цветы-ы-ы...",
  "Я не хочу думать, в моей бошке бардак",
  "Таких не переубедить, я знаю, тоже таким был",
  "Я начал мечтать побыть с собой на едине",
  "Нет чувств - нет боли, нет сердца - нет воли",
  "://: 02:11. RUN AWAY.",
  "Я рыба, хочу в океан, но меня кинули в аквариум",
  "Давай с тобой просто побудем в тишине?",
  "Увидимся в воскресенье",
  "Тёмная ночь, приведения стучат по трубам",
  "Сегодня трудно спать, думать о чём-то",
  "Выдыхаю дым, опускаюсь на дно, но мне становится лучше",
  "На улице зима, холод меня убьёт",
  "Я скучаю по временам когда я вдохновался только мелочами",
  "Моя голова забита детскими вопросами",
  "Я начну заново всё, с чистого листа всё...",
  "Дорогая грусть, прости, не вернусь",
  "Я буду кричать, знаю, меня кто-нибудь услышит...",
  "А время всё куда-то от меня идёт...",
  "Все мои мечты на крыше дома, где ты"
];

function randomQuote() {
  const id = Math.floor(Math.random() * quotesList.length);
  return { text: quotesList[id], id: id };
};

let quoteIdCache = null;

const checkQuote = (text, id) => text && quoteIdCache !== id;

function changeQuote() {
  const footer = document.getElementById("quote");
  const quote = randomQuote();

  if (checkQuote(quote.text, quote.id)) {
    footer.innerHTML = `”${quote.text}”`;
    quoteIdCache = quote.id;
  } else {
    console.log("[*] Repeat the search to find a quote.");
    changeQuote();
  };
};
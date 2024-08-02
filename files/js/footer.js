// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 4 February 2024 12:41:22 PM (UTC+3)

// A.R.: ../../quotes.txt
const quotesList = [
  "Дорогая грусть, прости, не вернусь",
  "на школьной дискотеке я танцую хайперпоп",
  "Давай с тобой просто побудем в тишине?",
  "Ты не движешься вперёд, ты всех тянешь за собой",
  "Встретимся скоро, но пока только во снах",
  "Я рыба, хочу в океан, но меня кинули в аквариум",
  "Смотри, там облако почти как дракон!",
  "Кажется я потерял смысл в дружбе",
  "На улице зима, холод меня убьёт",
  "Ты потеряешь смысл кому-либо доверять",
  "Где-то на диване я сижу курю немножко",
  "Буду сиять, надеюсь меня кто-нибудь увидит...",
  "Моя голова забита детскими вопросами",
  "Я начну заново всё, с чистого листа всё...",
  "Я опять не сдал уроки, потому что трахал в доте",
  "Он так чувствовал свою свободу",
  "Увидимся в воскресенье",
  "Я не филосов, я укурок, ставлю палец на курок",
  "Я уже не человек, но ты мне нравишься",
  "Вечером во рту будут круги, а утром под глазами",
  "Я так устал, надо покурить, я бы бросил, но блять",
  "Руки немеют, кажется им пизда",
  "Возьми с собой купальник, надеюсь там нет акул",
  "Таких не переубедить, я знаю, тоже таким был",
  "Я буду кричать, знаю, меня кто-нибудь услышит...",
  "Просто прекрати пос-пос-посещать мои ёбанные сны",
  "Я не знаю как тебя понять",
  "Тёмная ночь, приведения стучат по трубам",
  "Закрой глаза и сны запиши в тетрадь"
];

const Quotes = function () {
  this.quoteIdCache = null;

  this.random = function () {
    const quoteId = Math.floor(Math.random() * quotesList.length);
    const quote = quotesList[quoteId];
    return { text: quote, id: quoteId };
  };

  this.check = function (quote, quoteId) {
    const checkQuoteId = this.quoteIdCache != quoteId;

    if (quote.text && checkQuoteId) return true;
    return false;
  };
};

Quotes.prototype.change = function () {
  const footer = document.getElementById("quote");
  const quote = this.random();
  const check = this.check(quote, quote.id);

  if (check) {
    const quoteText = "&#8221;" + quote.text + "&#8221;";

    footer.innerHTML = quoteText;

    this.quoteIdCache = quote.id;
  } else {
    console.log('Repeat the search to find a quote.');
    this.change();
  };
};

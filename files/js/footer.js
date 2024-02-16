// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 4 February 2024 12:41:22 PM (UTC+3)

const quotesList = [
  "Просыпаюсь сразу в тильте",
  "Если ко мне со всей душой навстречу, чувствую подвох",
  "Я скучаю по временам когда я вдохновался только мелочами",
  "на школьной дискотеке я танцую хайперпоп",
  "Думаю о суициде, мы увидимся во снах",
  "Бывает больно, но я знаю, всё пройдёт",
  "Мне кажется я мёртв, и мне нужно больше тепла",
  "Я скучаю по временам когда я вдохновался только мелочами",
  "Смотри, там облако почти как дракон!",
  "Я боюсь людей, отвожу глаза",
  "Я зае#ался, где мне тебя найти?",
  "Ты забрала больное сердце и его мне не вернёшь",
  "Всё рушиться на глазах, всё что мы строили",
  "Тёплый ветер разгоняет все плохие мысли",
  "На улице зима, холод меня убьёт",
  "Время идёт, я боюсь потеряться...",
  "Неважнок как ты выглядишь, важно о чём ты говоришь",
  "Мне хочется спать, но я не смогу тут уснуть",
  "Моя голова забита детскими вопросами",
  "Увидимся в воскресенье",
  "Я уже не человек, но ты мне нравишься",
  "Руки немеют, кажется им п#зда",
  "Самый лучший день - это никогда",
  "Мне хочется знать, почему всё так",
  "Возьми с собой купальник, надеюсь там нет акул",
  "Я рыба, хочу в океан, но меня кинули в аквариум",
  "Мы стреляем сигареты, мы малы как Ватикан"
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

    if (quote.text && checkQuoteId) {
      return true;
    } else {
      return false;
    };
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
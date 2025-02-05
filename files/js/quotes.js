// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 4 February 2024 12:41:22 PM (UTC+3)

// A.R.: /quotes.txt
const quotesList = [
  "На улице зима, холод меня убьёт",
  "Я могу курить, но только если понарошку",
  "HELLO my name is QWKRTEZZZ",
  "Если бы ты была любимою пачкой, я бы выкурил все блоки, что из нашей табачки",
  "На школьной дискотеке я танцую хайперпоп",
  "Я боюсь, что рядом с тобой больше не усну",
  "Ночью опасно, одной в темноту тебе бы лучше не соваться",
  "Буду сиять, надеюсь меня кто-нибудь увидит...",
  "Я не хочу думать, в моей башке бардак",
  "Нахаслил себе на кроссовки за три дня",
  "Я притворяюсь, что внутри меня не пусто",
  "Никто ничего никогда не поймёт",
  "Темная ночь, приведения стучат по трубам",
  "Моя голова забита детскими вопросами",
  "Да, я знаю, что я сам тебя придумал",
  "На мне дизайны, так хочу в них раствориться",
  "Всё уже забыл, какой сегодня день",
  "У тебя злится папа, что я похож на бабу, это нормально",
  "Я так устал, надо покурить, я бы бросил, но блять",
  "Тёплый ветер разгоняет все плохие мысли",
  "Где-то на диване я сижу курю немножко",
  "Я тебе тогда соврал, что я тебя боюсь. Я любил твой скромный ад, зацени мою любовь"
];

let quoteIdCache = null;

function changeQuote() {
  const footer = document.getElementById("quote");
  let id, quote;

  do {
    id = Math.floor(Math.random() * quotesList.length); // quoteIdCache + 1
    quote = quotesList[id];
  } while (
    quote && id === quoteIdCache
  );

  if (!quote) {
    footer.hidden = true;
  };

  footer.textContent = `”${quote}”`;
  quoteIdCache = quote ? id : quoteIdCache;
};
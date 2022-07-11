const words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "козлик",
  "стул",
  "стол",
  "тетрадь",
  "велосипед",
  "ноутбук",
  "светильник",
  "пакет",
  "фонарик",
  "наушники",
  "папка",
  "лист",
  "банан",
  "планшет",
  "ручка",
  "линейка",
  "карта",
  "маркер",
  "кабель",
  "нож",
  "провод",
  "рубль",
  "диск",
  "часы",
  "цепочка",
  "знак",
  "розетка",
  "заметка",
  "мышка",
  "лампочка",
  "ножка",
  "конец",
  "книга",
  "карточка",
  "переходник"
];

let counts = 0;
const word = words[Math.floor(Math.random() * words.length)];

let toString;

let remainingLetters = word.length;
const answerArray = [];
counts = 8;

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

const st = document.getElementById('status');
const c = document.getElementById('count');
const cC = document.getElementById('countChar');
const e = document.getElementById('end');

window.onclick = function () {
  st.innerHTML = answerArray.join('.');
  c.innerHTML = counts;
  cC.innerHTML = remainingLetters;
};




// $('document').ready(function() {
//     $('#status').append(answerArray.join('  '));
//     $('#count').append(counts);
//     $('#countChar').append(remainingLetters);
// });

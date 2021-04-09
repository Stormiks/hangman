var words = [
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

var counts = 0;
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

var toString;

var remainingLetters = word.length;
var answerArray = [];
counts = 8;

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var st = document.getElementById('status');
var c = document.getElementById('count');
var cC = document.getElementById('countChar');
var e = document.getElementById('end');

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

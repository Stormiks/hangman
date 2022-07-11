'use strict'
window.onkeyup = function () {
	const valSt = st.innerHTML;
	const valC = c.innerHTML;
	const valCc = cC.innerHTML;

	const user = document.getElementById('user').value; // Получаем значение поле ввода
	const msg = document.getElementById('msg'); // Для вывода буквы и предупреждений
	/* Проверяем на пустоту форму */
	if (user !== "") {
		const toString = user.toUpperCase(); // Верхний регистр
		msg.innerHTML = toString; // Введённая текущая буква в форме
	} else {
		msg.innerHTML = 'Пустое поле ввода'; // Приводим к нижнему регистру
	}

	const u = user.toLowerCase(); // Приводим к нижнему регистру
	/* Проверяем на кол-во букв в форме */
	if (u.length !== 1 && u.length !== 0) {
		msg.innerHTML = 'Нужна одна буква!';
	} else {
		for (let j = 0; j < word.length; j++) {
			/* Если имеется совпадение с угаданной раннее буквой */
			if (answerArray[j] === u) {
				msg.innerHTML = 'Имеется такая буква!';
				if (counts >= 1) {
					counts--;
					c.innerHTML = counts;
				} else break;
			}

			/* Если буква совпала с буквой в загаданном слове */
			if (word[j] === u && answerArray[j] !== u) {
				answerArray[j] = u;
				st.innerHTML = answerArray.join('.');
				if (remainingLetters >= 1) {
					remainingLetters--;
					cC.innerHTML = remainingLetters;
				} else break;

				if (counts >= 1) {
					counts--;
					c.innerHTML = counts;
				} else break;
			}
		}
	}
	winCheck();
	// refrechStatus();
}

function winCheck() {
  if (remainingLetters >= 1 && counts == 0) {
    e.innerHTML = 'Вы проиграли! Было загадо слово: ' + word;
  }
}

// function refrechStatus() {
//     $('#status').text(answerArray.join('.')); // Текущие отгаданные буквы
//     $('#count').text(counts); // Текущие попытки
//     $('#countChar').text(remainingLetters); // Текущее кол-во букв
// }

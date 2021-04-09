function loadAudio (arr, vol) {
	var audio = document.createElement('audio');
	for (var i = 0; len = arr.length, i < len; i++) {
		var source = document.createElement('source'); // Создаём в документе элемент audio
		source.src = arr[i]; // Создаём ссылки на audio-элементы
		audio.appendChild(source); // Добавляем ресурсы в audio
	};

	audio.volume = 1 || vol;

	/* Создаём объект audio с свойствами по умолчанию */
	var obj = {
		dom: false,
		state: 'play',

		play: function () {
			this.dom.currentTime = 0;
			this.dom.play();
			this.state = 'play';
		},

		pause: function () {
			this.dom.pause();
			this.state = 'pause';
		},

		stop: function () {
			this.dom.pause();
			this.dom.currentTime = 0;
			this.state = 'stop';
		},

		setVolume: function (vol) {
			this.dom.volume = vol;
			console.log(vol);
		}
	};
	obj.dom = audio;
	return obj;
}

var theme = loadAudio(["assets/audio/Chernobil_Zona_otchugdenija.mp3"], 1);

var a;

setInterval(function () {

  if (a == 51) { // Цифровая клавиша "3"
  	theme.play();
  }
  if (a == 50) { // Цифровая клавиша "2"
  	theme.stop();
  }
  a = 0;
}, 20);

// theme.play();

// window.onkeydown = function (e) {
// 	console.log(e.keyCode);
// 	a = e.keyCode;
// }

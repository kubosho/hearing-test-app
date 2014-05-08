(function (exports) {
	'use strict';

	var HearingTest = Object.create(null);
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var context = new window.AudioContext();

	HearingTest.init = function init(frequency) {
		frequency = frequency || 440;

		var sound = this.createSound();
		sound.frequency.value = frequency;
		this.connect(sound);

		this.sound = sound;

		return sound;
	};

	HearingTest.createSound = function createSound() {
		return context.createOscillator();
	};

	HearingTest.connect = function connect(sound) {
		return sound.connect(context.destination);
	};

	HearingTest.playSound = function playSound(delay) {
		delay = delay || 0;
		this.sound.start(delay);
	};

	HearingTest.stopSound = function stopSound(delay) {
		delay = delay || 0;
		this.sound.stop(delay);
	};

	exports.HearingTest = HearingTest;
}(window));

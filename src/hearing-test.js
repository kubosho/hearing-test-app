(function (window) {
	'use strict';

	var HearingTest = Object.create(null);

	HearingTest.init = function init() {
		var context = new window.AudioContext();

		this.sound = this.createSound(context, 440);
		this.sound.connect(context.destination);
	}

	HearingTest.createSound = function createSound(context, frequency) {
		var oscillator = context.createOscillator();
		oscillator.frequency.value = frequency;

		return oscillator;
	};

	HearingTest.startSound = function startSound(delay) {
		delay = delay || 0;
		this.sound.start(delay);
	};

	HearingTest.stopSound = function stopSound(delay) {
		delay = delay || 0;
		this.sound.stop(delay);
	};

	window.HearingTest = HearingTest;
	return HearingTest;
}(window));

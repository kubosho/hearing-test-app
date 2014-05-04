(function (window) {
	'use strict';

	var HearingTest = Object.create(null);

	HearingTest.init = function init() {
		this.context = new window.AudioContext();
		this.sound = this.createSound(this.context);

		return this;
	}

	HearingTest.createSound = function createSound(context) {
		return context.createOscillator();
	};

	HearingTest.playSound = function playSound(delay) {
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

(function (window) {
	'use strict';

	var HearingTest = Object.create(null);

	HearingTest.init = function init() {
		var context = new window.AudioContext();

		this.sound = this.createSound(context);
		this.sound.connect(context.destination);

		return this;
	}

	HearingTest.createSound = function createSound(context) {
		return context.createOscillator();
	};

	HearingTest.playSound = function startSound(delay) {
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

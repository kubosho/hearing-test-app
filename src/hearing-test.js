(function (window) {
	'use strict';

	var HearingTest = Object.create(null);
	var context = new window.AudioContext();

	HearingTest.init = function init(frequency) {
		frequency = frequency || 440;

		return this;
	}

	HearingTest.createSound = function createSound(context) {
		return context.createOscillator();
	};

	HearingTest.connect = function connect(context, sound) {
		return sound.connect(context.destination);
	}

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

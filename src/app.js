(function (exports) {
	'use strict';

	var hearingTest = HearingTest;

	var app = exports.app = new Vue({
		el: '#hearing-test-app',

		data: {
			isPlaySound: false,
			frequency: 1000
		},

		sound: null,

		created: function () {
			this.$options.sound = hearingTest.init(this.frequency);

			this.$watch('isPlaySound', function (isPlaySound) {
				if (!isPlaySound) {
					this.$options.sound = hearingTest.init(this.frequency);
				}
			});
		},

		methods: {
			changeFrequency: function() {
				this.$options.sound.frequency.value = this.frequency;
			},

			playSound: function() {
				hearingTest.playSound();
				this.isPlaySound = true;
			},

			stopSound: function() {
				hearingTest.stopSound();
				this.isPlaySound = false;
			}
		}
	});
}(window));

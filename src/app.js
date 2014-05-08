(function (exports) {
	'use strict';

	var hearingTest = HearingTest;

	var app = exports.app = new Vue({
		el: '#hearing-test-app',

		data: {
			isPlaySound: false,
			frequency: 100
		},

		sound: null,

		created: function () {
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

			toggleSound: function() {
				this.isPlaySound ? hearingTest.stopSound() : hearingTest.playSound();
				this.isPlaySound = !this.isPlaySound;
			}
		}
	});
}(window));

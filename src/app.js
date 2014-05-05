(function (window) {
	'use strict';

	var hearingTest = HearingTest;
	var hearing = hearingTest.init();

	var app = new Vue({
		el: '#hearing-test-app',
		data: {
			isPlaySound: false,
			frequency: 1000
		},
		methods: {
			changeFrequency: function() {
				hearing.sound.frequency.value = this.frequency;
			}
		}
	});
}(window));

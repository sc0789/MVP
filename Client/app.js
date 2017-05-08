angular.module('krossOver', [])
	.controller('VideoCtrl', function($scope, $location, member){
		// $http.get({
		// 	method: 'GET',
		// 	url: '/index.html',
		// }).then(function (resp){
		// 	resp.data
		// })
	});

var start = document.getElementById('start').value;
var end = document.getElementById('end').value;

document.getElementById('video-js').src = 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4#t='+start+','+end;
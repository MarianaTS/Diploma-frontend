var app = angular.module('app', [ 'ngRoute']);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', { 
			templateUrl: './templates/start.html', 
			controller: 'startController',

		});
}]);
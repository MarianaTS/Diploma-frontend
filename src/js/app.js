var app = angular.module('app', [ 'ngRoute']);

app.config([ '$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', { 
			templateUrl: './templates/plot_reader.html', 
			controller: 'startController'
		})
		.when('/plot_reader', { 
			templateUrl: './templates/plot_reader.html', 
			controller: 'plotController'

});
		 $locationProvider.html5Mode({
 enabled: true,
 requireBase: false
});
		 
}]);
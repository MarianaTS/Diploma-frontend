var app = angular.module('app', [ 'ngRoute', 'angular-img-cropper', 'angularUtils.directives.dirPagination']);

app.config([ '$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', { 
			templateUrl: './templates/start.html',
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
angular.module('app', [
  'ngRoute'
])
.config(
	[
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'js/views/initial_screen.html'
				});
		}
	]
);
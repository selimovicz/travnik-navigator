/*global App: true, angular:true */
App.config(
	[
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'js/views/initial_screen.html',
				})
				.when('/:id', {
					templateUrl: 'js/views/initial_screen.html',
				});
		}
	]
);
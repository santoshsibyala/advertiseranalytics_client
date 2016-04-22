angular.module('appRoutes', ['ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/home',{
				templateUrl: 'app/views/pages/home.html',
				controller: 'homeCtrl',
				controllerAs: 'home'
			})
			.when('/',{
				templateUrl: 'app/views/pages/login.html',
                controller: 'loginCtrl',
				controllerAs: 'login'
			})
            .when('/signup',{
				templateUrl:'app/views/pages/signup.html',
                controller: 'loginCtrl',
				controllerAs: 'signup'
			})
			.when('/events',{
				templateUrl:'app/views/pages/events.html',
                controller: 'eventCtrl',
				controllerAs: 'event'
			})
            .when('/eventDashboard',{
				templateUrl:'app/views/pages/eventdashboard.html',
            controller: 'eventCtrl',
				controllerAs: 'event'
			})
            .when('/profile',{
				templateUrl:'app/views/pages/profile.html',
                controller: 'profileCtrl',
				controllerAs: 'profile'
			})
			

			$locationProvider.html5Mode(true);
	});
angular.module('myApp', [
  'services',
  'userInput',
  'ngRoute'])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/userInput/userInput.html',
      controller: 'userInputController'
    })
    .otherwise({
      redirectTo: '/',

    });

})

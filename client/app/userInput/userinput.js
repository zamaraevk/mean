angular.module('userInput', [])

.controller('userInputController', function ($scope, usersDB) {
	angular.extend($scope, usersDB);

});

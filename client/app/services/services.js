angular.module('services', [])

.factory('usersDB', function ($http) {

  var getUsers = function (user) {
     return $http({
      method: 'GET',
      url: '/getusers',
    })
    .then(function (resp) {
      console.log(resp);
      //console.log(resp.data.artists.items);
    })
    .catch(function(err){
     // console.log(err);
    })
   };


  return {
    getUsers: getUsers
  }

})

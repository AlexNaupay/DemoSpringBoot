'use strict';
App.factory('AppService',[function () {
	return {
	    url: function (uri) {
            return "http://localhost:8080/api/v1"+uri;
        }
    }
}]);
App.factory('UserService', ['$http', '$q', 'AppService', function($http, $q, AppService){

	return {
		
			fetchAllUsers: function() {
					return $http.get(AppService.url('/users'))
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching users');
										return $q.reject(errResponse);
									}
							);
			},
		    
		    createUser: function(user){
					return $http.post(AppService.url('/users'), user)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating user');
										return $q.reject(errResponse);
									}
							);
		    },
		    
		    updateUser: function(user, id){
					return $http.put(AppService.url('/users/')+id, user)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while updating user');
										return $q.reject(errResponse);
									}
							);
			},
		    
			deleteUser: function(id){
					return $http.delete(AppService.url('/users/')+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while deleting user');
										return $q.reject(errResponse);
									}
							);
			}
		
	};

}]);

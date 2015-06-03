/*global angular:true, is:true, console: true */
App.service('LocationService', ['$http', '$q', '$location', 'conf', function($http, $q, $location, conf) {
    'use strict';

    var locations = {};

    locations.getLocations = function(location_id) {
        if(!location_id) location_id = '';
        return $http.get(conf.locationsPath + '/' + location_id)
            .success(function(response) {
                return response.data;
            }, function(response) {
                return response.status;
            });
    };

    return locations;
}]);
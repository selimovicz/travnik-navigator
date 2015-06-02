/*global angular:true, is:true, console: true */
App.service('LocationService', ['$http', '$location', 'conf', function($http, $location, conf) {
    'use strict';

    var locations = {};

    locations.getLocations = function(location_id) {
        if(!location_id) location_id = '';
        return $http.get(conf.locationsPath + location_id)
            .then(function(response) {
                return response.data;
            }, function(response) {
                return response.status;
            });
    };

    return locations;
}]);
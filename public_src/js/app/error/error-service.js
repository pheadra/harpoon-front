/**
 * Created by pheadra on 10/31/14.
 */
app.factory('errors', ['$http', '$q', 'server_url', function ($http, $q, server_url) {
    var factory = {};
    factory.getErrorlist = function(csrf, applicationkey) {
        var param = {'csrf-token':csrf, 'appid': applicationkey};

        var url = '/error';
        var deferred = $q.defer();
        $http({url:url,
            method:'GET',
            params:param,
            headers:{'Application-Id':applicationkey, 'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(x) {
                deferred.reject({ error: "Server Error" });
            });
        return deferred.promise;
    };

    factory.getErrorCount = function(csrf, applicationkey){
        var param = {'csrf-token':csrf, 'appid': applicationkey};
        console.log(applicationkey);
        var url = '/error/total';
        var deferred = $q.defer();
        $http({url:url,
            method:'GET',
            params:param,
            headers:{'Application-Id':applicationkey, 'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(x) {
                deferred.reject({ error: "Server Error" });
            });
        return deferred.promise;
    };

    factory.getErrorDetaillist = function(csrf, applicationkey) {
        var param = {'csrf-token':csrf, 'appid': applicationkey};

        var url = '/errordetail';
        var deferred = $q.defer();
        $http({url:url,
            method:'GET',
            params:param,
            headers:{'Application-Id':applicationkey, 'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(x) {
                deferred.reject({ error: "Server Error" });
            });
        return deferred.promise;
    };

    factory.getErrorDetailCount = function(csrf, applicationkey){
        var param = {'csrf-token':csrf, 'appid': applicationkey};
        console.log(applicationkey);
        var url = '/errordetail/total';
        var deferred = $q.defer();
        $http({url:url,
            method:'GET',
            params:param,
            headers:{'Application-Id':applicationkey, 'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(x) {
                deferred.reject({ error: "Server Error" });
            });
        return deferred.promise;
    };

    return factory;
}]);
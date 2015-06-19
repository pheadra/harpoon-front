/**
 * Created by pheadra on 10/31/14.
 */
app.factory('transactions', ['$http', '$q', 'server_url', function ($http, $q, server_url) {
    var factory = {};

    factory.getTranscationCount = function(csrf, applicationkey) {
        var param = {'csrf-token':csrf, 'appid': applicationkey};

        var url = '/transaction/count';
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

    factory.getTranscationList = function(csrf, applicationkey) {
        var param = {'csrf-token':csrf, 'appid': applicationkey};

        var url = '/transaction';
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

    factory.getTranscationTrace = function(csrf, applicationkey, objhash){
        var param = {'csrf-token':csrf, 'appid': applicationkey, 'objhash' : objhash};
        console.log(applicationkey);
        var url = '/transaction/trace';
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
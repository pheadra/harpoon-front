/**
 * Created by pheadra on 10/31/14.
 */
app.factory('realtimes', ['$http', '$q', 'server_url', function ($http, $q, server_url) {
    var factory = {};
    factory.getRealtime = function(csrf, applicationkey) {
        var param = {'csrf-token':csrf, 'appid': applicationkey};

        var url = '/realtime';
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

    factory.getRealtimeLast = function(csrf, applicationkey){
        var param = {'csrf-token':csrf, 'appid': applicationkey};
        console.log(applicationkey);
        var url = '/realtime/last';
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
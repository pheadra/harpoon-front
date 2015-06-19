/**
 * Created by pheadra on 6/17/15.
 */
app.controller('AnalysisCtrl', ['$scope', function($scope){
    $scope.keytransaction = [{
        url :'/*/calsses/GameObject',
        appserver : '0ms',
        callcount : '0calls',
        error:'0.00%'
    },
        {
            url :'/*/calsses/LiveObject',
            appserver : '0ms',
            callcount : '0calls',
            error:'0.00%'
        }];

}]);

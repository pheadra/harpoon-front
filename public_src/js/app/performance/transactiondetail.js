/**
 * Created by pheadra on 6/17/15.
 */

app.controller('TranscationDetailCtrl',['$scope', '$state', 'transactions',  'toaster', function($scope, $state, transactions, toaster){
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    if (isEmpty($scope.user.currentproject)) {
        toaster.pop('note', 'Select Project', '프로젝트를 선택해주세요.');
        console.log($scope.user.currentproject, $state.current.name);
        $state.go('app.projects');
    }


    $scope.transactionlist = [];
    $scope.transactiontrace = [];

    var csrf = angular.element(document.querySelector('meta[name=csrf-token]')).context.content;
    var applicationkey = $scope.user.currentproject.applicationkey;
    transactions.getTranscationList(csrf, applicationkey).then(function (result) {
        console.log(result);

        $scope.transactionlist = result;
    });
    $scope.clicktrace = function(objhash){
        transactions.getTranscationTrace(csrf, applicationkey, objhash).then(function (result) {
            console.log(result);

            $scope.transactiontrace = result;
        });

    }

}]);

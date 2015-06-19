/**
 * Created by pheadra on 6/17/15.
 */
app.controller('RealtimeCtrl',  ['$scope', '$state', 'realtimes',  'toaster', function($scope, $state, realtimes, toaster){

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    if (isEmpty($scope.user.currentproject)) {
        toaster.pop('note', 'Select Project', '프로젝트를 선택해주세요.');
        console.log($scope.user.currentproject, $state.current.name);
        $state.go('app.projects');
    }



    var csrf = angular.element(document.querySelector('meta[name=csrf-token]')).context.content;
    var applicationkey = $scope.user.currentproject.applicationkey;


    realtimes.getRealtime(csrf, applicationkey).then(function (result) {
        console.log(result);
        $scope.realtimedata = result;
    });
}]);

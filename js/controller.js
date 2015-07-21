angular.module('labapp', [])
.controller('memberCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.currentMemberArray = [];
    $scope.alumnusMemberArray = [];

    function compareOrder(a, b) {
        if(a.order > b.order) {
            return -1;
        }
        else if(a.order < b.order) {
            return 1;
        }
        return 0;
    }

    function loadLabMember() {
        $http.post('http://resolve.iis.sinica.edu.tw/labweb/php/getlabmember.php'
        ).success(function(data) {
            console.log(data);
            $scope.currentMemberArray = data.currentMemberArray.sort(compareOrder);
            $scope.alumnusMemberArray = data.alumnusMemberArray.sort(compareOrder);
        }).error(function() {
            console.log('error');
        });
    };

    loadLabMember();

}]);

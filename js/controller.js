angular.module('labapp', [])
.controller('memberCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.currentMemberArray = [];
    $scope.alumnusMemberArray = [];

    function loadLabMember() {
        $http.post('http://resolve.iis.sinica.edu.tw/labweb/php/getlabmember.php'
        ).success(function(data) {
            console.log(data);
            $scope.currentMemberArray = data.currentMemberArray;
            $scope.alumnusMemberArray = data.alumnusMemberArray;
        }).error(function() {
            console.log('error');
        });
    };

    loadLabMember();

}]);
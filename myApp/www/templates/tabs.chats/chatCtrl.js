app.controller('ChatsCtrl', function ($scope, $http) {

    $scope.resp = "Please make a selection";

    $scope.requestChanged = function (_d) {
        if (_d == 1) {
            $http.get("http://localhost:8080/caps").then(
                function (_d) {
                    $scope.resp = _d.data;
                },
                function (_e) {
                    $scope.resp = "ERROR";
                }
            );
        }

        if (_d == 2) {
            $http.get("http://localhost:8080/count").then(
                function (_d) {
                    $scope.resp = _d.data;
                },
                function (_e) {
                    $scope.resp = "ERROR";
                }
            );
        }
    }

});
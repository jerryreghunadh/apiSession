app.controller('DashCtrl', function ($scope) {

    var socket = io.connect('http://localhost:8080');

    $scope.dataFromServer;
    $scope.myData = {};
    $scope.counter = 0;
    $scope.getDataFromServer = function (_d) {
        $scope.counter++;
        socket.emit("data", _d);
    }

    socket.on("hello", function (_d) {
        $scope.dataFromServer = _d.d;
    });

    socket.on("data_s", function (_d) {
        console.log(_d);
        $scope.$apply(function () {
            $scope.dataFromServer = _d.d;
        });
    });
});
myapp.controller('LoginController', ['$scope',
    function ($scope) {

        $scope.username = "";
        $scope.password = "";
        $scope.Login = function () {
            if ($scope.myForm.$valid) {
                if ($scope.username == 'nosql' && $scope.password == 'html5')
                    alert('Welcome to the hell');
                else {
                    alert('Invalid user');
                }
            }
        };
    }]);
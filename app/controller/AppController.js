define([],
    function () {
        AppController.$inject = ["$scope", "$translate"];

        function AppController($scope, $translate) {
            $scope.currentLang = "en";
            
            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };
        }


        return AppController;
    }
);
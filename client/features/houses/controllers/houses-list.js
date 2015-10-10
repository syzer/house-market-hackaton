(function(){

    angular.module('tinder').controller('features.houses.controllers.houses-list', Ctrl);

    Ctrl.$inject = [
        '$scope',
        '$rootScope',
        '$state'
    ];

    function Ctrl(
        $scope,
        $rootScope,
        $state
    ) {
        $scope.houses = $scope.$meteorCollection(Collections.Houses);

    }

})();

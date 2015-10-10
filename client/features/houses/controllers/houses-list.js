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
        console.log('house list');
        //$scope.houses = $scope.$meteorCollection(Collections.Houses);

    }

})();

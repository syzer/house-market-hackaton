Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

angular.module("tinder").run(["$rootScope", "$state", function($rootScope, $state) {
    /**
     * Redirect to main page if failed to go to selected group page (f.ex. because not logged in)
     */
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        if (error === "AUTH_REQUIRED") {
            $state.go('houses.list');
        }
    });
}]);

angular.module("tinder").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('houses', {
                url: '/houses',
                templateUrl: 'client/features/houses/views/houses.ng.html',
                controller: 'features.houses.controllers.houses',
                resolve: {
                    'subscribe': [
                        '$meteor', function($meteor) {
                            return $meteor.subscribe('houses');
                        }
                    ]
                }
            })
            .state('houses.list', {
                url: '/list',
                views: {
                    "@": {
                        templateUrl: 'client/features/houses/views/houses-list.ng.html',
                        controller: 'features.houses.controllers.houses-list'
                    }
                }
            })
            .state('map', {
                url: '/map',
                templateUrl: 'client/app/map.ng.html',
                controller: 'MapCtrl',
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                        return $meteor.requireUser();
                    }]
                }
            });

        $urlRouterProvider.otherwise("/map");

    }]);

//if (Meteor.isCordova) {
//    angular.element(document).on('deviceready', onReady);
//} else {
//    angular.element(document).ready(onReady);
//}

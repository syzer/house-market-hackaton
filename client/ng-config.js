angular.module("tinder").run(["$rootScope", "$state", function($rootScope, $state) {
    /**
     * Redirect to main page if failed to go to selected group page (f.ex. because not logged in)
     */
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        if (error === "AUTH_REQUIRED") {
            $state.go('groups');
        }
    });
}]);

angular.module("tinder").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'client/features/index/views/index.ng.html',
                controller: 'features.index.controllers.index'
            })
            .state('houses.list', {
                url: '/houses/list',
                templateUrl: 'client/features/houses/views/list.ng.html',
                controller: 'features.houses.controllers.list',
                resolve: {
                    'subscribe': [
                        '$meteor', function($meteor) {
                            return $meteor.subscribe('houses');
                        }
                    ]
                }
            });

        $urlRouterProvider.otherwise("/houses/list");
    }]);

/**
 * Created by mruthyumjaya on 25-04-2017.
 */
(function() {

    angular.module('cmtracker', ['ngRoute','ngMessages']).config(moduleConfig);

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'hctrl'
            })
            .when('/pricing', {
                templateUrl: 'pricing/pricing.html',
                controller: 'PricingCtrl',
                controllerAs: 'pctrl'
            })
            .when('/contact', {
                templateUrl: 'contact/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'cctrl'
            })
            .when('/login', {
                templateUrl: 'login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'lctrl'
            })

            .otherwise({
                redirectTo: '/home'
            });


        function loadUser($http) {
            return $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users'
            });
        }

        function loadUserPic($http) {
            return $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/photos/1'
            });
        }
    }
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(document).ready(function () {

        $('#login').modal('show');

    });
})();
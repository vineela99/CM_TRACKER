/**
 * Created by mruthyumjaya on 25-04-2017.
 */
(function(){
    angular.module('cmtracker').controller('HomeCtrl', HomeController);

    function HomeController ($routeParams,$http) {
        var hctrl = this;
        console.log('home controller');
    }
})();

/**
 * Created by mruthyumjaya on 25-04-2017.
 */
(function() {

    angular.module('cmtracker').controller('LoginCtrl', LoginController);

    function LoginController($location,$http) {
        var lctrl = this;
        $('#login').modal('show');
        lctrl.show=function () {
            $('#login').modal('show');
        }
    }
})();

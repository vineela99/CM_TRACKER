/**
 * Created by mruthyumjaya on 29-04-2017.
 */
(function(){
    angular.module('cmtracker').controller('ContactCtrl', ContactController);

    function ContactController ($routeParams,$http) {
        var cctrl = this;
        console.log('contact controller');
        cctrl.submitContact=function(contactDetails){

            var comp=contactDetails;
            console.log(comp);

        };
    }
})();
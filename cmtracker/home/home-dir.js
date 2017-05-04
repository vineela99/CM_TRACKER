/**
 * Created by mruthyumjaya on 26-04-2017.
 */
(function(){
    angular.module('cmtracker').directive('bannerDir',BannerDir );
    function BannerDir($window){
        return{
            restrict: 'A',
            link: function(scope,elem,attr){
                var winHeight= $window.innerHeight-71;

                elem.css("height", winHeight+ 'px');
            }
        }
    }

})();
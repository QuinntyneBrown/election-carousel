module ElectionCarousel {

    "use strict";

    export class AppHeader {
        
        constructor() { }

        public static createInstance = () => {
            return new AppHeader();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/election/directives/appHeader/appHeader.html";

        public link = () => {
            
        }
    }

    angular.module("election").directive("appHeader", [AppHeader.createInstance]);

} 
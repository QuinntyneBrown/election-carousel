module ElectionCarousel {

    "use strict";

    export class AppNavigation {

        constructor() { }

        public static createInstance = () => {
            return new AppNavigation();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/election/directives/appNavigation/appNavigation.html";

        public link = () => {

        }
    }

    angular.module("election").directive("appNavigation", [AppNavigation.createInstance]);

} 
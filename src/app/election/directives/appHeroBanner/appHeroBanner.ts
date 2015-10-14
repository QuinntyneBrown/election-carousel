module ElectionCarousel {

    "use strict";

    export class AppHeroBanner {

        constructor() { }

        public static createInstance = () => {
            return new AppHeroBanner();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/election/directives/appHeroBanner/appHeroBanner.html";

        public link = () => {

        }
    }

    angular.module("election").directive("appHeroBanner", [AppHeroBanner.createInstance]);

} 
module ElectionCarousel {

    "use strict";

    export class Advertising {

        constructor() { }

        public static createInstance = () => {
            return new Advertising();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/election/directives/advertising/advertising.html";

        public link = () => {

        }
    }

    angular.module("election").directive("advertising", [Advertising.createInstance]);

} 
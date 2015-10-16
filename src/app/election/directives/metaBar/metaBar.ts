module ElectionCarousel {

    "use strict";

    export class MetaBar {

        constructor() { }

        public static createInstance = () => {
            return new MetaBar();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/election/directives/metaBar/metaBar.html";

        public link = () => {

        }
    }

    angular.module("election").directive("metaBar", [MetaBar.createInstance]);

} 
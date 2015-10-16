module ElectionCarousel {

    "use strict";

    export class SideBar {

        constructor() { }

        public static createInstance = () => {
            return new SideBar();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/election/directives/sideBar/sideBar.html";

        public link = () => {

        }
    }

    angular.module("election").directive("sideBar", [SideBar.createInstance]);

} 
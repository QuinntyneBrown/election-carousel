module ElectionCarousel.Directives {

    export class AppHeader {
        constructor() { }

        public static createInstance = () => {
            return new AppHeader();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/directives/appHeader/appHeader.html";

        public link = (scope: any, element: ng.IAugmentedJQuery, attributes: ng.IAttributes) => {

        }
    }
} 
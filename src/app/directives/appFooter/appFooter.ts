module ElectionCarousel.Directives {

    export class AppFooter {
        constructor() { }

        public static createInstance = () => {
            return new AppFooter();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/directives/appFooter/appFooter.html";

        public link = (scope: any, element: ng.IAugmentedJQuery, attributes: ng.IAttributes) => {

        }
    }
} 
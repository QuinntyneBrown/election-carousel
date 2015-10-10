module ElectionCarousel.Directives {
    
    export class Riding {
        constructor() { }

        public static createInstance = () => {
            return new Riding();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public scope:any = {
            riding:"="
        };

        public templateUrl: string = "src/app/directives/riding/riding.html";

        public link = (scope:any, element:ng.IAugmentedJQuery, attributes:ng.IAttributes) => {
            
        }
    }

    angular.module("election-carousel").directive("riding", [Riding.createInstance]);
} 
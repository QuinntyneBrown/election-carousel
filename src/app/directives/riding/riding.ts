module ElectionCarousel.Directives {
    
    export class Riding {
        constructor() { }

        public static createInstance = () => {
            return new Riding();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "src/app/directives/riding/riding.html";

        public link = (scope:any, element:ng.IAugmentedJQuery, attributes:ng.IAttributes) => {
            
        }
    }
} 
/// <reference path="../../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {
    
    export class AutoSizeText {
        constructor() { }

        public static createInstance =() => {
            return new AutoSizeText();
        }

        public restrict: string = "A";

        public link = (scope: any, element: ng.IAugmentedJQuery, attributes: ng.IAttributes) => {
            var $parent = angular.element(element[0].parentNode);
            var lastParentHeight: number;
            var maxFontSize = Number(attributes["maxFontSize"]);

            scope.$$postDigest(() => {
                                
                var fontSize = maxFontSize;
                do {
                    element.css('font-size', fontSize);
                    fontSize = fontSize - 1;
                } while ((element.height() + $parent.find("h3").height()) > $parent.height());

            });

            window.addEventListener("resize", () => {
                lastParentHeight = $parent.height();
                var fontSize = maxFontSize;
                do {
                    element.css('font-size', fontSize);
                    fontSize = fontSize - 1;
                } while ((element.height() + $parent.find("h3").height()) > lastParentHeight);
            });
        }
    }

    angular.module("election").directive("autoSizeText", [AutoSizeText.createInstance]);
}
 
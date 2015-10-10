/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {
    
    export var translateX = (element: HTMLElement, value: number) => {
        angular.element(element).css({
            "-moz-transform": "translateX(" + value + "px)",
            "-webkit-transform": "translateX(" + value + "px)",
            "-ms-transform": "translateX(" + value + "px)",
            "-transform": "translateX(" + value + "px)"
        });

        return element;
    }

    angular.module("election-carousel").value("translateX", translateX);
} 
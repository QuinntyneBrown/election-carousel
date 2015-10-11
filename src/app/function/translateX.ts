/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {
    
    export var translateX: ITranslateX = (element: HTMLElement, value: number): HTMLElement => {
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
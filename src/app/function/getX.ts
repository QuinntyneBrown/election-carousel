/// <reference path="../../../typings/typescriptapp.d.ts" />
 

module ElectionCarousel {

    export var getX: IGetX = (element: HTMLElement): number => {
        var transform = angular.element(element).css("transform");
        if (transform === "none") return 0;

        var result = JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"));

        return JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"))[4];
    }
    angular.module("election-carousel").value("getX", getX);

}
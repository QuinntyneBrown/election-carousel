/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    export var isMobile: IIsMobileFn = (): boolean => {
        return window.innerWidth < 768;
    }

    angular.module("election-carousel").value("isMobile", isMobile);
} 
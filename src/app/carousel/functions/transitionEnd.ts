/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    export var transitonEnd: string = "transitionend";

    if (typeof (<any>document.body).style.webKitTransform !== "undefined")
        transitonEnd = "webKitTransitionEnd";

    angular.module("carousel").value("transitonEnd", transitonEnd);
} 
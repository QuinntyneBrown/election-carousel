/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class RidingsController {

        constructor(private ridings: Array<IRiding>) { }

    }

    angular.module("election").controller("ridingsController", ["ridings",RidingsController]);
} 
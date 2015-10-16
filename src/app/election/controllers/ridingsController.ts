/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    /**
    * @name RidingsController
    * @module ElectionCarousel
    * @description
    * Responsible for exposing the ridings model to the view
    */
    export class RidingsController {

        constructor(private ridings: Array<IRiding>) { }

    }

    angular.module("election").controller("ridingsController", ["ridings",RidingsController]);
} 
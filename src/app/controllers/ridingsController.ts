/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class RidingsController {

        constructor(private ridings: Array<IRiding>) { alert(ridings.length); }

    }

    angular.module("election-carousel").controller("ridingsController", [RidingsController]);
} 
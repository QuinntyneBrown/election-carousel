/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export function Percentage($filter:ng.IFilterService) {
        var _$filter = $filter;         
        return (value: number) => {
            return (_$filter('number')(value * 100, 1)) + "%";
        };
    }

    angular.module("election-carousel").filter("percentage", ["$filter",Percentage]);
}
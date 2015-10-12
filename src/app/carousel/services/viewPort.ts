/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class ViewPort {
        constructor() { }

        public createInstance = (options: IViewPortInstanceOptions) => {
            var instance = new ViewPort();
            var viewPort = angular.element("<div class='view-port'></div>");
            var previousArrow = angular.element("<div class='previous-arrow'></div>");
            var nextArrow = angular.element("<div class='next-arrow'></div>");
            viewPort.append(previousArrow);
            viewPort.append(nextArrow);
            viewPort.css("overflowX", "hidden");
            options.parentElement.append(viewPort);
            instance.augmentedJQuery = options.parentElement.find(".view-port");
            return instance;
        }

        private _augmentedJQuery: ng.IAugmentedJQuery;

        public get augmentedJQuery() { return this._augmentedJQuery; }

        public set augmentedJQuery(value: ng.IAugmentedJQuery) { this._augmentedJQuery = value; }

        public get width() { return this.augmentedJQuery.width(); }

    }

    angular.module("carousel").service("viewPort", [ViewPort]);
} 
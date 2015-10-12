/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class ViewPort {
        constructor() { }

        public createInstance = (options: IViewPortInstanceOptions) => {
            var instance = new ViewPort();
            var viewPort = angular.element("<div class='view-port'></div>");
            viewPort.css("overflowX", "hidden");
            viewPort.css("height", options.height);
            viewPort.css("width", options.width);
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
/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class Container implements IContainer {
        constructor() { }

        public createInstance = (options: IContainerInstanceOptions) => {
            var instance = new Container();
            var container = angular.element("<div class='container'></div>");
            container.css("height", options.height);
            container.css("width", options.width);
            container.css("transition", "all 1s cubic-bezier(.10, .10, .25, .90)");
            options.parentElement.append(container);
            instance.augmentedJQuery = options.parentElement.find(".container");
            return instance;
        }

        private _augmentedJQuery: ng.IAugmentedJQuery;

        public get augmentedJQuery() { return this._augmentedJQuery; }

        public set augmentedJQuery(value: ng.IAugmentedJQuery) { this._augmentedJQuery = value; }
    }

    angular.module("election-carousel").service("container", [Container]);
} 
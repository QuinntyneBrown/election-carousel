/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class ViewPort {
        constructor(private $compile:ng.ICompileService) { }

        public createInstance = (options: IViewPortInstanceOptions) => {
            var instance = new ViewPort(this.$compile);
            var viewPort = angular.element("<div class='view-port'></div>");
            var previousArrow = angular.element("<div class='previous-arrow' data-ng-click='onPrevious()'><img src='assets/images/carousel_button_prev.png'/></div>");
            var nextArrow = angular.element("<div class='next-arrow' data-ng-click='onNext()'><img src='assets/images/carousel_button_next.png'/></div>");
            viewPort.append(previousArrow);
            viewPort.append(nextArrow);
            viewPort.css("overflowX", "hidden");

            var viewPortContent = this.$compile(viewPort)(options.scope);

            options.parentElement.append(viewPortContent);
            instance.augmentedJQuery = options.parentElement.find(".view-port");
            return instance;
        }

        private _augmentedJQuery: ng.IAugmentedJQuery;

        public get augmentedJQuery() { return this._augmentedJQuery; }

        public set augmentedJQuery(value: ng.IAugmentedJQuery) { this._augmentedJQuery = value; }

        public get width() { return this.augmentedJQuery.width(); }

    }

    angular.module("carousel").service("viewPort", ["$compile",ViewPort]);
} 
﻿/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    /**
    * @name Container
    * @module ElectionCarousel
    * @description
    * Responsible for providing an api for managing the container div for the slides
    */
    export class Container implements IContainer {
        constructor() { }

        public createInstance = (options: IContainerInstanceOptions) => {
            var instance = new Container();
            var container = angular.element("<div class='container'></div>");                        
            options.parentElement.append(container);
            instance.augmentedJQuery = options.parentElement.find(".container");
            return instance;
        }

        /** @internal */
        private _augmentedJQuery: ng.IAugmentedJQuery;

        public get augmentedJQuery() { return this._augmentedJQuery; }

        public set augmentedJQuery(value: ng.IAugmentedJQuery) { this._augmentedJQuery = value; }

        public get htmlElement() { return this.augmentedJQuery[0]; }

        public get height() { return this.augmentedJQuery.height(); }

        public turnOffTransitions() {
            this.augmentedJQuery.addClass("notransition");
        }

        public turnOnTransitions() {
            this.augmentedJQuery.removeClass("notransition");
        }
    }

    angular.module("carousel").service("container", [Container]);
} 
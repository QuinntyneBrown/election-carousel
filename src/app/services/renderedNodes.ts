/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class RenderedNodes {
        constructor() { }

        public createInstance = (options:any) => {

            var instance = new RenderedNodes();
            instance.container = options.container;
            return instance;
        }

        public container: IContainer;
    }

    angular.module("election-carousel").service("renderedNodes", [RenderedNodes]);
} 
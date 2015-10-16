/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    /**
    * @name Navigation
    * @module ElectionCarousel
    * @description
    * Component to expose next and previous buttons (in mobile)
    */
    export class Navigation {
        
        constructor(private $compile:ng.ICompileService) { }

        public createInstance = (options:INavigationInstanceOptions) => {
            var instance = new Navigation(this.$compile);
            var html = [
                "<div class='navigation'>",
                "<div class='previous' data-ng-click='onPrevious()'><a><&nbsp;&nbsp;</a></div>",
                "<div class='next' data-ng-click='onNext()'><a>&nbsp;&nbsp;></a></div>",
                "<div class='clear'></div>",
                "</div>"
            ].join(' ');

            var navigationContent = this.$compile(angular.element(html))(options.scope);

            options.parentElement.append(navigationContent);

            return instance;
        }
    }

    angular.module("carousel").service("navigation", ["$compile",Navigation]);
} 
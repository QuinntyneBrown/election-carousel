/// <reference path="../../typings/typescriptapp.d.ts" />

angular.module("templates", []);

angular.module("election-carousel", ["ui.router", "templates"])
    .config([
        "$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {

            ElectionCarousel.States.configure($stateProvider);

        }
    ]).run([() => {
        FastClick.attach(document.body);
    }]);


/// <reference path="../../typings/typescriptapp.d.ts" />

angular.module("election-carousel", ["ui.router"])
    .config([
    "$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {

        ElectionCarousel.States.configure($stateProvider);

    }]);
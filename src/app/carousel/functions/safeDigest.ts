/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    export var safeDigest: ISafeDigestFn = (scope: ng.IScope) => {
        if (!scope.$$phase && !scope.$root.$$phase)
            console.log("apply");
            scope.$apply();
    }

    angular.module("carousel").value("safeDigest", safeDigest);
} 
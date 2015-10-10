/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class RidingsDataService implements IRidingsDataService {

        constructor(private $http:ng.IHttpService, private $q: ng.IQService) { }

        public getAll = () => {
            var deferred = this.$q.defer();
            jQuery.ajax({
                type: 'GET',
                url: "http://static.globalnews.ca/content/test/results-2011.js",
                jsonpCallback: 'gNews_getRidingDetailsCallback',
                dataType: 'jsonp',
                success: (results) => {
                    deferred.resolve(results);
                }
            });

            return deferred.promise;
        }
    }

    angular.module("election-carousel").service("ridingDataService", ["$http", "$q", RidingsDataService]);
} 
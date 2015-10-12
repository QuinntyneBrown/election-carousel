/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class RidingsDataService implements IRidingsDataService {

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, localStorageManager: ILocalStorageManager) {
            this.localStorageManager = localStorageManager.createInstance({ storageId: "election-carousel" });
            
        }

        public getAll = () => {
            var url = "http://static.globalnews.ca/content/test/results-2011.js";

            var deferred = this.$q.defer();

            var cachedData: any = this.localStorageManager.getByName({ name: url });

            if (!cachedData) {
                jQuery.ajax({
                    type: 'GET',
                    url: url,
                    jsonpCallback: 'gNews_getRidingDetailsCallback',
                    dataType: 'jsonp',
                    success: (results) => {
                        this.localStorageManager.put({ name: url, value: results });
                        deferred.resolve(results);
                    }
                });
            } else {
                deferred.resolve(cachedData.value);
            }

            return deferred.promise;
        }

        private localStorageManager: ILocalStorageManager;
    }

    angular.module("election").service("ridingDataService", ["$http", "$q", "localStorageManager",RidingsDataService]);
} 
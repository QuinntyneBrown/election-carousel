module ElectionCarousel {

    "use strict";

    export class States {
        
        public static configure = ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider
                .state("default-empty",
                    {
                        url: "",
                        templateUrl: "src/app/views/ridings.html",
                        resolve: {
                            ridings: [
                                "$q", "riding", "ridingDataService", ($q: ng.IQService, riding: IRiding, ridingDataService: IRidingsDataService) => {
                                    var deferred = $q.defer();

                                    ridingDataService.getAll().then((results) => {
                                        var ridings: Array<IRiding> = [];
                                        for (var i = 0; i < results.length; i++) {
                                            ridings.push(riding.createInstance({ data: results[i] }));
                                        }
                                        deferred.resolve(ridings);

                                    });

                                    return deferred.promise;
                                }
                            ]
                        },
                        controller: "ridingsController",
                        controllerAs: "vm"
                    });

            $stateProvider
                .state("default",
                    {
                        url: "",
                        templateUrl: "src/app/views/ridings.html",
                        resolve: {
                            ridings: [
                                "$q", "riding", "ridingDataService", ($q: ng.IQService, riding: IRiding, ridingDataService: IRidingsDataService) => {
                                    var deferred = $q.defer();

                                    ridingDataService.getAll().then((results) => {
                                        var ridings: Array<IRiding> = [];
                                        for (var i = 0; i < results.length; i++) {
                                            ridings.push(riding.createInstance({ data: results[i] }));
                                        }
                                        deferred.resolve(ridings);

                                    });

                                    return deferred.promise;
                                }
                            ]
                        },
                        controller: "ridingsController",
                        controllerAs: "vm"
                    });            
        }
    }
} 
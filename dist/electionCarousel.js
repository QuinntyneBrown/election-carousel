/// <reference path="../../typings/typescriptapp.d.ts" />
angular.module("election-carousel", ["ui.router"])
    .config([
    "$stateProvider", function ($stateProvider) {
        ElectionCarousel.States.configure($stateProvider);
    }]);

//# sourceMappingURL=electionCarousel.module.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var States = (function () {
        function States() {
        }
        States.configure = function ($stateProvider) {
            $stateProvider
                .state("default-empty", {
                url: "",
                templateUrl: "src/app/views/ridings.html",
                resolve: {
                    ridings: [
                        "$q", "riding", "ridingDataService", function ($q, riding, ridingDataService) {
                            var deferred = $q.defer();
                            ridingDataService.getAll().then(function (results) {
                                var ridings = [];
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
                .state("default", {
                url: "",
                templateUrl: "src/app/views/ridings.html",
                resolve: {
                    ridings: [
                        "$q", "riding", "ridingDataService", function ($q, riding, ridingDataService) {
                            var deferred = $q.defer();
                            ridingDataService.getAll().then(function (results) {
                                var ridings = [];
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
        };
        return States;
    })();
    ElectionCarousel.States = States;
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=electionCarousel.states.js.map

/// <reference path="../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var RidingsController = (function () {
        function RidingsController(ridings) {
            this.ridings = ridings;
            alert(ridings.length);
        }
        return RidingsController;
    })();
    ElectionCarousel.RidingsController = RidingsController;
    angular.module("election-carousel").controller("ridingsController", [RidingsController]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=ridingsController.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Riding = (function () {
        function Riding() {
            this.createInstance = function (options) {
                var instance = new Riding();
                return instance;
            };
        }
        Object.defineProperty(Riding.prototype, "displayName", {
            get: function () { return this._displayName; },
            set: function (value) { this._displayName; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Riding.prototype, "candidates", {
            get: function () { return this._candidates; },
            set: function (value) { this._candidates; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Riding.prototype, "totalVotes", {
            get: function () { return this._totalVotes; },
            set: function (value) { this._totalVotes; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Riding.prototype, "winningCandidate", {
            get: function () { return this._winningCandidate; },
            set: function (value) { this._winningCandidate; },
            enumerable: true,
            configurable: true
        });
        return Riding;
    })();
    angular.module("election-carousel").service("riding", [Riding]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=riding.js.map

/// <reference path="../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var RidingsDataService = (function () {
        function RidingsDataService($http, $q) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.getAll = function () {
                var deferred = _this.$q.defer();
                jQuery.ajax({
                    type: 'GET',
                    url: "http://static.globalnews.ca/content/test/results-2011.js",
                    jsonpCallback: 'gNews_getRidingDetailsCallback',
                    dataType: 'jsonp',
                    success: function (results) {
                        deferred.resolve(results);
                    }
                });
                return deferred.promise;
            };
        }
        return RidingsDataService;
    })();
    ElectionCarousel.RidingsDataService = RidingsDataService;
    angular.module("election-carousel").service("ridingDataService", ["$http", "$q", RidingsDataService]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=ridingsDataService.js.map

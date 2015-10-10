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
    var Candidate = (function () {
        function Candidate() {
            this.createInstance = function (options) {
                var instance = new Candidate();
                return instance;
            };
        }
        Object.defineProperty(Candidate.prototype, "name", {
            get: function () { return this._name; },
            set: function (value) { this._name; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "totalVotes", {
            get: function () { return this._totalVotes; },
            set: function (value) { this._totalVotes; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "riding", {
            get: function () { return this._riding; },
            set: function (value) { this._riding; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "party", {
            get: function () { return this._party; },
            set: function (value) { this._party; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "percentageOfTotalVotes", {
            get: function () { return this.totalVotes / this.riding.totalVotes; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "isWinner", {
            get: function () { return this.riding.winningCandidate.name == this.name; },
            enumerable: true,
            configurable: true
        });
        return Candidate;
    })();
    ElectionCarousel.Candidate = Candidate;
    angular.module("election-carousel").service("candidate", [Candidate]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=candidate.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Riding = (function () {
        function Riding(candidate) {
            var _this = this;
            this.candidate = candidate;
            this.createInstance = function (options) {
                var instance = new Riding(_this.candidate);
                instance.id = options.data.id;
                instance.displayName = options.data.name;
                for (var i = 0; i < options.data.results.length; i++) {
                    instance.totalVotes = instance.totalVotes + options.data.results[i].votes;
                    var candidate = _this.candidate.createInstance({ riding: instance, data: options.data.results[i] });
                    _this.candidates.push(candidate);
                    if (options.data.results[i].isElected)
                        _this.winningCandidate = candidate;
                }
                return instance;
            };
            this._candidates = [];
            this._totalVotes = 0;
        }
        Object.defineProperty(Riding.prototype, "id", {
            get: function () { return this._id; },
            set: function (value) { this._id = value; },
            enumerable: true,
            configurable: true
        });
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
            set: function (value) { this._totalVotes = value; },
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
    ElectionCarousel.Riding = Riding;
    angular.module("election-carousel").service("riding", ["candidate", Riding]);
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

var ElectionCarousel;
(function (ElectionCarousel) {
    var Directives;
    (function (Directives) {
        var AppFooter = (function () {
            function AppFooter() {
                this.restrict = "E";
                this.replace = true;
                this.templateUrl = "src/app/directives/appFooter/appFooter.html";
                this.link = function (scope, element, attributes) {
                };
            }
            AppFooter.createInstance = function () {
                return new AppFooter();
            };
            return AppFooter;
        })();
        Directives.AppFooter = AppFooter;
    })(Directives = ElectionCarousel.Directives || (ElectionCarousel.Directives = {}));
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=appFooter.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    var Directives;
    (function (Directives) {
        var AppHeader = (function () {
            function AppHeader() {
                this.restrict = "E";
                this.replace = true;
                this.templateUrl = "src/app/directives/appHeader/appHeader.html";
                this.link = function (scope, element, attributes) {
                };
            }
            AppHeader.createInstance = function () {
                return new AppHeader();
            };
            return AppHeader;
        })();
        Directives.AppHeader = AppHeader;
    })(Directives = ElectionCarousel.Directives || (ElectionCarousel.Directives = {}));
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=appHeader.js.map



//# sourceMappingURL=carousel.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    var Directives;
    (function (Directives) {
        var Riding = (function () {
            function Riding() {
                this.restrict = "E";
                this.replace = true;
                this.templateUrl = "src/app/directives/riding/riding.html";
                this.link = function (scope, element, attributes) {
                };
            }
            Riding.createInstance = function () {
                return new Riding();
            };
            return Riding;
        })();
        Directives.Riding = Riding;
    })(Directives = ElectionCarousel.Directives || (ElectionCarousel.Directives = {}));
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=riding.js.map

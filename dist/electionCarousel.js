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
    angular.module("election-carousel").controller("ridingsController", ["ridings", RidingsController]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=ridingsController.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Candidate = (function () {
        function Candidate($filter, $injector) {
            var _this = this;
            this.$filter = $filter;
            this.$injector = $injector;
            this.createInstance = function (options) {
                var instance = new Candidate(_this.$filter, _this.$injector);
                instance.party = _this.$injector.get("party").createInstance({ partyCode: options.data.partyCode });
                instance.name = options.data.name;
                instance.votes = options.data.votes;
                instance.totalVotes = options.totalVotes;
                return instance;
            };
        }
        Object.defineProperty(Candidate.prototype, "totalVotes", {
            get: function () { return this._totalVotes; },
            set: function (value) { this._totalVotes = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "name", {
            get: function () { return this._name; },
            set: function (value) { this._name = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "firstName", {
            get: function () { return this.name.split(" ")[0]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "lastName", {
            get: function () {
                var parts = this.name.split(" ");
                var results = [];
                for (var i = 1; i < parts.length; i++) {
                    results.push(parts[i]);
                }
                return results.join(" ");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "votes", {
            get: function () { return this._votes; },
            set: function (value) { this._votes = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "percentageOfTotalVotes", {
            get: function () {
                var value = (this._votes / this.totalVotes);
                var percentage = this.$filter('number')(value, 3);
                return (percentage * 100) + "%";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Candidate.prototype, "party", {
            get: function () { return this._party; },
            set: function (value) { this._party = value; },
            enumerable: true,
            configurable: true
        });
        return Candidate;
    })();
    ElectionCarousel.Candidate = Candidate;
    angular.module("election-carousel").service("candidate", ["$filter", "$injector", Candidate]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=candidate.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Party = (function () {
        function Party() {
            this.createInstance = function (options) {
                var instance = new Party();
                instance.partyCode = options.partyCode;
                instance.id = options.id;
                return instance;
            };
        }
        Object.defineProperty(Party.prototype, "id", {
            get: function () { return this._id; },
            set: function (value) { this._id = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Party.prototype, "name", {
            get: function () { return this._name; },
            set: function (value) { this._name = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Party.prototype, "colorCode", {
            get: function () {
                if (this.partyCode == "NDP")
                    return "#ED5C27";
                if (this.partyCode == "PC")
                    return "#0C499C";
                if (this.partyCode == "LIB")
                    return "#D71923";
                if (this.partyCode == "GRN")
                    return "#4C9F45";
                return "#DDD";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Party.prototype, "partyCode", {
            get: function () { return this._partyCode; },
            set: function (value) { this._partyCode = value; },
            enumerable: true,
            configurable: true
        });
        return Party;
    })();
    ElectionCarousel.Party = Party;
    angular.module("election-carousel").service("party", [Party]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=party.js.map

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
                instance.name = options.data.name;
                for (var i = 0; i < options.data.results.length; i++) {
                    instance.totalVotes = instance.totalVotes + options.data.results[i].votes;
                }
                for (var i = 0; i < options.data.results.length; i++) {
                    var candidate = _this.candidate.createInstance({ totalVotes: instance.totalVotes, data: options.data.results[i] });
                    var candidates = instance.candidates;
                    candidates.push(candidate);
                    instance.candidates = candidates;
                    if (options.data.results[i].isElected)
                        instance.winningCandidate = candidate;
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
        Object.defineProperty(Riding.prototype, "name", {
            get: function () { return this._name; },
            set: function (value) { this._name = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Riding.prototype, "candidates", {
            get: function () { return this._candidates; },
            set: function (value) { this._candidates = value; },
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
            set: function (value) { this._winningCandidate = value; },
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
        var Riding = (function () {
            function Riding() {
                this.restrict = "E";
                this.replace = true;
                this.scope = {
                    riding: "="
                };
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
        angular.module("election-carousel").directive("riding", [Riding.createInstance]);
    })(Directives = ElectionCarousel.Directives || (ElectionCarousel.Directives = {}));
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=riding.js.map

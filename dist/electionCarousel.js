/// <reference path="../../../typings/typescriptapp.d.ts" />
angular.module("carousel", []);

//# sourceMappingURL=carousel.module.js.map

/// <reference path="../../../typings/typescriptapp.d.ts" />
angular.module("templates", []);
angular.module("election", ["ui.router", "carousel", "templates"])
    .config([
    "$stateProvider", function ($stateProvider) {
        ElectionCarousel.States.configure($stateProvider);
    }
]).run([function () {
        FastClick.attach(document.body);
    }]);

//# sourceMappingURL=election.module.js.map

/// <reference path="../../../typings/typescriptapp.d.ts" />
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
                templateUrl: "src/app/election/views/ridings.html",
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
                templateUrl: "src/app/election/views/ridings.html",
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

//# sourceMappingURL=election.states.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var getHtml = function (who, deep) {
        if (!who || !who.tagName)
            return '';
        var txt, ax, el = document.createElement("div");
        el.appendChild(who.cloneNode(false));
        txt = el.innerHTML;
        if (deep) {
            ax = txt.indexOf('>') + 1;
            txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
        }
        el = null;
        return txt;
    };
    angular.module("carousel").value("getHtml", getHtml);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=getHtml.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    ElectionCarousel.getX = function (element) {
        var transform = angular.element(element).css("transform");
        if (transform === "none")
            return 0;
        var result = JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"));
        return JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"))[4];
    };
    angular.module("carousel").value("getX", ElectionCarousel.getX);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=getX.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    ElectionCarousel.isMobile = function () {
        return window.innerWidth < 768;
    };
    angular.module("carousel").value("isMobile", ElectionCarousel.isMobile);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=isMobile.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    ElectionCarousel.translateX = function (element, value) {
        angular.element(element).css({
            "-moz-transform": "translateX(" + value + "px)",
            "-webkit-transform": "translateX(" + value + "px)",
            "-ms-transform": "translateX(" + value + "px)",
            "-transform": "translateX(" + value + "px)"
        });
        return element;
    };
    angular.module("carousel").value("translateX", ElectionCarousel.translateX);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=translateX.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
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
    angular.module("election").controller("ridingsController", ["ridings", RidingsController]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=ridingsController.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Container = (function () {
        function Container() {
            this.createInstance = function (options) {
                var instance = new Container();
                var container = angular.element("<div class='container'></div>");
                options.parentElement.append(container);
                instance.augmentedJQuery = options.parentElement.find(".container");
                return instance;
            };
        }
        Object.defineProperty(Container.prototype, "augmentedJQuery", {
            get: function () { return this._augmentedJQuery; },
            set: function (value) { this._augmentedJQuery = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "htmlElement", {
            get: function () { return this.augmentedJQuery[0]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "height", {
            get: function () { return this.augmentedJQuery.height(); },
            enumerable: true,
            configurable: true
        });
        return Container;
    })();
    ElectionCarousel.Container = Container;
    angular.module("carousel").service("container", [Container]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=container.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Navigation = (function () {
        function Navigation($compile) {
            var _this = this;
            this.$compile = $compile;
            this.createInstance = function (options) {
                var instance = new Navigation(_this.$compile);
                var html = [
                    "<div class='navigation'>",
                    "<div class='previous' data-ng-click='onPrevious()'><a><&nbsp;&nbsp;</a></div>",
                    "<div class='next' data-ng-click='onNext()'><a>&nbsp;&nbsp;></a></div>",
                    "<div class='clear'></div>",
                    "</div>"
                ].join(' ');
                var navigationContent = _this.$compile(angular.element(html))(options.scope);
                options.parentElement.append(navigationContent);
                return instance;
            };
        }
        return Navigation;
    })();
    ElectionCarousel.Navigation = Navigation;
    angular.module("carousel").service("navigation", ["$compile", Navigation]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=navigation.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var RenderedNodes = (function () {
        function RenderedNodes() {
            this.createInstance = function (options) {
                var instance = new RenderedNodes();
                instance.container = options.container;
                return instance;
            };
        }
        return RenderedNodes;
    })();
    ElectionCarousel.RenderedNodes = RenderedNodes;
    angular.module("carousel").service("renderedNodes", [RenderedNodes]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=renderedNodes.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Renderer = (function () {
        function Renderer($compile, $injector, $interval, $timeout, getX, translateX) {
            var _this = this;
            this.$compile = $compile;
            this.$injector = $injector;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.getX = getX;
            this.translateX = translateX;
            this.createInstance = function (options) {
                var instance = new Renderer(_this.$compile, _this.$injector, _this.$interval, _this.$timeout, _this.getX, _this.translateX);
                instance.template = options.template;
                instance.items = options.items;
                instance.itemName = options.itemName;
                instance.scope = options.scope;
                instance.parentElement = options.parentElement;
                instance.guid = options.attributes["carouselGuid"];
                instance.viewPort = _this.$injector.get("viewPort").createInstance({
                    parentElement: options.parentElement,
                    scope: options.scope
                });
                instance.lastViewPortWidth = instance.viewPort.width;
                instance.$interval(function () {
                    if (instance.lastViewPortWidth != instance.viewPort.width) {
                        instance.lastViewPortWidth = instance.viewPort.width;
                        instance.reRender();
                    }
                }, 10, null, false);
                instance.container = _this.$injector.get("container").createInstance({
                    height: Number(options.attributes["carouselHeight"]),
                    width: Number(options.attributes["carouselWidth"]) * options.items.length,
                    parentElement: instance.viewPort.augmentedJQuery
                });
                instance.container.htmlElement.addEventListener("transitionend", function () {
                    instance.inTransition = false;
                });
                instance.navigation = _this.$injector.get("navigation").createInstance({
                    guid: instance.guid,
                    parentElement: instance.viewPort.augmentedJQuery,
                    scope: instance.scope
                });
                instance.scope = options.scope;
                instance.scope.onPrevious = instance.renderPrevious;
                instance.scope.onNext = instance.renderNext;
                return instance;
            };
            this.render = function (options) {
                if (!_this.hasRendered)
                    _this.initialRender();
            };
            this.reRender = function () {
                _this.translateX(_this.container.htmlElement, 0);
                if (!_this.scope.$$phase)
                    _this.scope.$digest();
            };
            this.renderNext = function () {
                if (!_this.inTransition) {
                    _this.inTransition = true;
                    var x = _this.getX(_this.container.htmlElement);
                    if (x === (_this.items.length * (-_this.lastViewPortWidth)) + _this.lastViewPortWidth) {
                        _this.translateX(_this.container.htmlElement, 0);
                    }
                    else {
                        _this.translateX(_this.container.htmlElement, x - _this.lastViewPortWidth);
                    }
                }
            };
            this.renderPrevious = function () {
                if (!_this.inTransition) {
                    _this.inTransition = true;
                    var x = _this.getX(_this.container.htmlElement);
                    if (x === 0) {
                        _this.translateX(_this.container.augmentedJQuery[0], x + (_this.items.length * (-_this.lastViewPortWidth)) + _this.lastViewPortWidth);
                    }
                    else {
                        _this.translateX(_this.container.augmentedJQuery[0], x + _this.lastViewPortWidth);
                    }
                }
            };
            this.initialRender = function () {
                var fragment = document.createDocumentFragment();
                for (var i = 0; i < _this.items.length; i++) {
                    var childScope = _this.scope.$new(true);
                    childScope[_this.itemName] = _this.items[i];
                    childScope.$$index = i;
                    childScope.viewPort = _this.viewPort;
                    childScope.container = _this.container;
                    var itemContent = _this.$compile(angular.element(_this.template))(childScope);
                    fragment.appendChild(itemContent[0]);
                }
                _this.container.augmentedJQuery[0].appendChild(fragment);
                _this.hasRendered = true;
            };
            this.hasRendered = false;
            this.inTransition = false;
            this.lastViewPortWidth = 0;
        }
        Object.defineProperty(Renderer.prototype, "guid", {
            get: function () { return this._guid; },
            set: function (value) { this._guid = value; },
            enumerable: true,
            configurable: true
        });
        return Renderer;
    })();
    ElectionCarousel.Renderer = Renderer;
    angular.module("carousel").service("renderer", ["$compile", "$injector", "$interval", "$timeout", "getX", "translateX", Renderer]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=renderer.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var ViewPort = (function () {
        function ViewPort($compile) {
            var _this = this;
            this.$compile = $compile;
            this.createInstance = function (options) {
                var instance = new ViewPort(_this.$compile);
                var viewPort = angular.element("<div class='view-port'></div>");
                var previousArrow = angular.element("<div class='previous-arrow' data-ng-click='onPrevious()'><img src='assets/images/carousel_button_prev.png'/></div>");
                var nextArrow = angular.element("<div class='next-arrow' data-ng-click='onNext()'><img src='assets/images/carousel_button_next.png'/></div>");
                viewPort.append(previousArrow);
                viewPort.append(nextArrow);
                viewPort.css("overflowX", "hidden");
                var viewPortContent = _this.$compile(viewPort)(options.scope);
                options.parentElement.append(viewPortContent);
                instance.augmentedJQuery = options.parentElement.find(".view-port");
                return instance;
            };
        }
        Object.defineProperty(ViewPort.prototype, "augmentedJQuery", {
            get: function () { return this._augmentedJQuery; },
            set: function (value) { this._augmentedJQuery = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewPort.prototype, "width", {
            get: function () { return this.augmentedJQuery.width(); },
            enumerable: true,
            configurable: true
        });
        return ViewPort;
    })();
    ElectionCarousel.ViewPort = ViewPort;
    angular.module("carousel").service("viewPort", ["$compile", ViewPort]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=viewPort.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var VirtualRenderer = (function () {
        function VirtualRenderer($compile, $injector, $interval, $timeout, getX, translateX) {
            var _this = this;
            this.$compile = $compile;
            this.$injector = $injector;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.getX = getX;
            this.translateX = translateX;
            this.createInstance = function (options) {
                var instance = new VirtualRenderer(_this.$compile, _this.$injector, _this.$interval, _this.$timeout, _this.getX, _this.translateX);
                instance.template = options.template;
                instance.items = options.items;
                instance.itemName = options.itemName;
                instance.scope = options.scope;
                instance.parentElement = options.parentElement;
                instance.guid = options.attributes["carouselGuid"];
                instance.viewPort = _this.$injector.get("viewPort").createInstance({
                    parentElement: options.parentElement,
                    scope: options.scope
                });
                instance.lastViewPortWidth = instance.viewPort.width;
                instance.$interval(function () {
                    if (instance.lastViewPortWidth != instance.viewPort.width) {
                        instance.lastViewPortWidth = instance.viewPort.width;
                        instance.reRender();
                    }
                }, 10, null, false);
                instance.container = _this.$injector.get("container").createInstance({
                    height: Number(options.attributes["carouselHeight"]),
                    width: Number(options.attributes["carouselWidth"]) * options.items.length,
                    parentElement: instance.viewPort.augmentedJQuery
                });
                instance.container.htmlElement.addEventListener("transitionend", function () {
                    instance.inTransition = false;
                });
                instance.navigation = _this.$injector.get("navigation").createInstance({
                    guid: instance.guid,
                    parentElement: instance.viewPort.augmentedJQuery,
                    scope: instance.scope
                });
                instance.scope = options.scope;
                instance.scope.onPrevious = instance.renderPrevious;
                instance.scope.onNext = instance.renderNext;
                return instance;
            };
            this.render = function (options) {
                if (!_this.hasRendered)
                    _this.initialRender();
            };
            this.reRender = function () {
                _this.translateX(_this.container.htmlElement, 0);
                if (!_this.scope.$$phase)
                    _this.scope.$digest();
            };
            this.renderNext = function () {
                if (!_this.inTransition) {
                    _this.inTransition = true;
                    var x = _this.getX(_this.container.htmlElement);
                    if (x === (_this.items.length * (-_this.lastViewPortWidth)) + _this.lastViewPortWidth) {
                        _this.translateX(_this.container.htmlElement, 0);
                    }
                    else {
                        _this.translateX(_this.container.htmlElement, x - _this.lastViewPortWidth);
                    }
                }
            };
            this.renderPrevious = function () {
                if (!_this.inTransition) {
                    _this.inTransition = true;
                    var x = _this.getX(_this.container.htmlElement);
                    if (x === 0) {
                        _this.translateX(_this.container.augmentedJQuery[0], x + (_this.items.length * (-_this.lastViewPortWidth)) + _this.lastViewPortWidth);
                    }
                    else {
                        _this.translateX(_this.container.augmentedJQuery[0], x + _this.lastViewPortWidth);
                    }
                }
            };
            this.initialRender = function () {
                var fragment = document.createDocumentFragment();
                for (var i = 0; i < _this.items.length; i++) {
                    var childScope = _this.scope.$new(true);
                    childScope[_this.itemName] = _this.items[i];
                    childScope.$$index = i;
                    childScope.viewPort = _this.viewPort;
                    childScope.container = _this.container;
                    var itemContent = _this.$compile(angular.element(_this.template))(childScope);
                    fragment.appendChild(itemContent[0]);
                }
                _this.container.augmentedJQuery[0].appendChild(fragment);
                _this.hasRendered = true;
                _this._currentIndex = 0;
            };
            this.hasRendered = false;
            this.inTransition = false;
            this.lastViewPortWidth = 0;
        }
        Object.defineProperty(VirtualRenderer.prototype, "currentIndex", {
            get: function () { return this._currentIndex; },
            set: function (value) { this._currentIndex = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VirtualRenderer.prototype, "guid", {
            get: function () { return this._guid; },
            set: function (value) { this._guid = value; },
            enumerable: true,
            configurable: true
        });
        return VirtualRenderer;
    })();
    ElectionCarousel.VirtualRenderer = VirtualRenderer;
    angular.module("carousel").service("virtualRenderer", ["$compile", "$injector", "$interval", "$timeout", "getX", "translateX", VirtualRenderer]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=virtualRenderer.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    function Percentage($filter) {
        var _$filter = $filter;
        return function (value) {
            return (_$filter('number')(value * 100, 1)) + "%";
        };
    }
    ElectionCarousel.Percentage = Percentage;
    angular.module("election").filter("percentage", ["$filter", Percentage]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=percentage.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Candidate = (function () {
        function Candidate($injector, percentageFilter) {
            var _this = this;
            this.$injector = $injector;
            this.percentageFilter = percentageFilter;
            this.createInstance = function (options) {
                var instance = new Candidate(_this.$injector, _this.percentageFilter);
                instance.party = _this.$injector.get("party").createInstance({ partyCode: options.data.partyCode });
                instance.name = options.data.name;
                instance.votes = options.data.votes;
                instance.isElected = options.data.isElected;
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
                var indexOfSpace = this.name.indexOf(" ");
                return this.name.substring(indexOfSpace + 1);
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
                return this.percentageFilter(this._votes / this.totalVotes);
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
    angular.module("election").service("candidate", ["$injector", "percentageFilter", Candidate]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=candidate.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    angular.module("election").value("localStorage", localStorage);
    var LocalStorageManager = (function () {
        function LocalStorageManager($window, localStorage) {
            var _this = this;
            this.$window = $window;
            this.localStorage = localStorage;
            this.createInstance = function (options) {
                var instance = new LocalStorageManager(_this.$window, _this.localStorage);
                if (options && options.storageId) {
                    instance.storageId = options.storageId;
                }
                else {
                    instance.storageId = "localStorage";
                }
                return instance;
            };
            this._items = null;
            this.get = function () {
                if (_this._items) {
                    return _this._items;
                }
                var storageEntry = _this.localStorage.getItem(_this._storageId);
                if (storageEntry === "undefined" || storageEntry === null || storageEntry === "null") {
                    _this._items = [];
                }
                else {
                    _this._items = JSON.parse(storageEntry);
                }
                return _this._items;
            };
            this.getByName = function (options) {
                var items = _this.get();
                var storageItem = null;
                items.forEach(function (item) {
                    if (options.name === item.name) {
                        storageItem = item;
                    }
                });
                return storageItem;
            };
            this.put = function (options) {
                var items = _this.get();
                var itemExist = false;
                items.forEach(function (item) {
                    if (options.name === item.name) {
                        itemExist = true;
                        item.value = options.value;
                        item.category = options.category;
                    }
                });
                if (!itemExist) {
                    items.push(options);
                }
            };
            $window.onbeforeunload = function () {
                _this.localStorage.setItem(_this._storageId, JSON.stringify(_this._items));
            };
        }
        Object.defineProperty(LocalStorageManager.prototype, "storageId", {
            get: function () { return this._storageId; },
            set: function (value) { this._storageId = value; },
            enumerable: true,
            configurable: true
        });
        return LocalStorageManager;
    })();
    ElectionCarousel.LocalStorageManager = LocalStorageManager;
    angular.module("election").service("localStorageManager", ["$window", "localStorage", LocalStorageManager]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=localStorageManager.js.map

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
                    return "#D71920";
                if (this.partyCode == "GRN")
                    return "#4C9F45";
                return "#666";
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
    angular.module("election").service("party", [Party]);
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
            get: function () {
                return this._candidates.sort(function (a, b) { return b.votes - a.votes; });
            },
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
    angular.module("election").service("riding", ["candidate", Riding]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=riding.js.map

/// <reference path="../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var RidingsDataService = (function () {
        function RidingsDataService($http, $q, localStorageManager) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.getAll = function () {
                var url = "http://static.globalnews.ca/content/test/results-2011.js";
                var deferred = _this.$q.defer();
                var cachedData = _this.localStorageManager.getByName({ name: url });
                if (!cachedData) {
                    jQuery.ajax({
                        type: 'GET',
                        url: url,
                        jsonpCallback: 'gNews_getRidingDetailsCallback',
                        dataType: 'jsonp',
                        success: function (results) {
                            _this.localStorageManager.put({ name: url, value: results });
                            deferred.resolve(results);
                        }
                    });
                }
                else {
                    deferred.resolve(cachedData.value);
                }
                return deferred.promise;
            };
            this.localStorageManager = localStorageManager.createInstance({ storageId: "election-carousel" });
        }
        return RidingsDataService;
    })();
    ElectionCarousel.RidingsDataService = RidingsDataService;
    angular.module("election").service("ridingDataService", ["$http", "$q", "localStorageManager", RidingsDataService]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=ridingsDataService.js.map

/// <reference path="../../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    var Carousel = (function () {
        function Carousel($interval, getHtml, renderer) {
            var _this = this;
            this.$interval = $interval;
            this.getHtml = getHtml;
            this.renderer = renderer;
            this.restirct = "A";
            this.transclude = 'element';
            this.scope = false;
            this.compile = function (template) {
                var renderer = _this.renderer;
                var parentElement = template.parent();
                var getHtml = _this.getHtml;
                return function (scope, element, attributes, controller, transclude) {
                    transclude(scope.$new(), function (clone) {
                        removeCustomAttributes(clone, "carousel");
                        renderer.createInstance({
                            parentElement: angular.element(parentElement),
                            template: getHtml(clone[0], true),
                            scope: scope,
                            attributes: attributes,
                            items: parseItems(scope, attributes),
                            itemName: parseItemName(attributes)
                        }).render();
                    });
                };
                function parseItemName(attributes) {
                    var match = attributes["carousel"].match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/);
                    return match[1];
                }
                function parseItems(scope, attributes) {
                    var match = attributes["carousel"].match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/);
                    if (match) {
                        var collectionStringArray = match[2].split(".");
                        var items = scope;
                        for (var i = 0; i < collectionStringArray.length; i++) {
                            items = items[collectionStringArray[i]];
                        }
                        return items;
                    }
                    else {
                        return JSON.parse(attributes["carousel"]);
                    }
                }
                function removeCustomAttributes(clone, prefix) {
                    var names = [];
                    var attributes = clone[0].attributes;
                    for (var i = 0; i < attributes.length; i++) {
                        if (attributes[i].nodeName.indexOf(prefix) > -1)
                            names.push(attributes[i].nodeName);
                    }
                    names.forEach(function (name) { clone[0].removeAttribute(name); });
                }
                function verifyRepeatExpression(repeatExpression) {
                    if (repeatExpression.match(/limitTo/) || repeatExpression.match(/startFrom/)) {
                        throw new Error('"limitTo" and "startFrom" filters are not allowed in directive');
                    }
                }
                ;
            };
        }
        Carousel.createInstance = function ($interval, getHtml, renderer) {
            return new Carousel($interval, getHtml, renderer);
        };
        return Carousel;
    })();
    ElectionCarousel.Carousel = Carousel;
    angular.module("carousel").directive("carousel", ["$interval", "getHtml", "renderer", Carousel.createInstance]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=carousel.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var Advertising = (function () {
        function Advertising() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "src/app/election/directives/advertising/advertising.html";
            this.link = function () {
            };
        }
        Advertising.createInstance = function () {
            return new Advertising();
        };
        return Advertising;
    })();
    ElectionCarousel.Advertising = Advertising;
    angular.module("election").directive("advertising", [Advertising.createInstance]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=advertising.js.map



//# sourceMappingURL=appFooter.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var AppHeader = (function () {
        function AppHeader() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "src/app/election/directives/appHeader/appHeader.html";
            this.link = function () {
            };
        }
        AppHeader.createInstance = function () {
            return new AppHeader();
        };
        return AppHeader;
    })();
    ElectionCarousel.AppHeader = AppHeader;
    angular.module("election").directive("appHeader", [AppHeader.createInstance]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=appHeader.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var AppHeroBanner = (function () {
        function AppHeroBanner() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "src/app/election/directives/appHeroBanner/appHeroBanner.html";
            this.link = function () {
            };
        }
        AppHeroBanner.createInstance = function () {
            return new AppHeroBanner();
        };
        return AppHeroBanner;
    })();
    ElectionCarousel.AppHeroBanner = AppHeroBanner;
    angular.module("election").directive("appHeroBanner", [AppHeroBanner.createInstance]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=appHeroBanner.js.map

/// <reference path="../../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    var Directives;
    (function (Directives) {
        var CandidateList = (function () {
            function CandidateList() {
                this.restrict = "E";
                this.replace = true;
                this.scope = {
                    candidates: "="
                };
                this.templateUrl = "src/app/election/directives/candidateList/candidateList.html";
                this.link = function (scope, element, attributes) {
                };
            }
            CandidateList.createInstance = function () {
                return new CandidateList();
            };
            return CandidateList;
        })();
        Directives.CandidateList = CandidateList;
        angular.module("election").directive("candidateList", [CandidateList.createInstance]);
    })(Directives = ElectionCarousel.Directives || (ElectionCarousel.Directives = {}));
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=candidateList.js.map

var ElectionCarousel;
(function (ElectionCarousel) {
    "use strict";
    var AppNavigation = (function () {
        function AppNavigation() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "src/app/election/directives/appNavigation/appNavigation.html";
            this.link = function () {
            };
        }
        AppNavigation.createInstance = function () {
            return new AppNavigation();
        };
        return AppNavigation;
    })();
    ElectionCarousel.AppNavigation = AppNavigation;
    angular.module("election").directive("appNavigation", [AppNavigation.createInstance]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=appNavigation.js.map

/// <reference path="../../../../../typings/typescriptapp.d.ts" />
var ElectionCarousel;
(function (ElectionCarousel) {
    var AutoSizeText = (function () {
        function AutoSizeText() {
            this.restrict = "A";
            this.link = function (scope, element, attributes) {
                var $parent = angular.element(element[0].parentNode);
                var lastParentHeight;
                var maxFontSize = Number(attributes["maxFontSize"]);
                scope.$$postDigest(function () {
                    var fontSize = maxFontSize;
                    do {
                        element.css('font-size', fontSize);
                        fontSize = fontSize - 1;
                    } while ((element.height() + $parent.find("h3").height()) > $parent.height());
                });
                window.addEventListener("resize", function () {
                    lastParentHeight = $parent.height();
                    var fontSize = maxFontSize;
                    do {
                        element.css('font-size', fontSize);
                        fontSize = fontSize - 1;
                    } while ((element.height() + $parent.find("h3").height()) > lastParentHeight);
                });
            };
        }
        AutoSizeText.createInstance = function () {
            return new AutoSizeText();
        };
        return AutoSizeText;
    })();
    ElectionCarousel.AutoSizeText = AutoSizeText;
    angular.module("election").directive("autoSizeText", [AutoSizeText.createInstance]);
})(ElectionCarousel || (ElectionCarousel = {}));

//# sourceMappingURL=autoSizeText.js.map

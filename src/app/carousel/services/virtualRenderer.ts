/// <reference path="../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    /**
    * @name VirtualRenderer
    * @module ElectionCarousel
    * @description
    */
    export class VirtualRenderer implements IRenderer {

        constructor(private $compile: ng.ICompileService,
            private $injector: ng.auto.IInjectorService,
            private $interval: ng.IIntervalService,
            private $timeout: ng.ITimeoutService,
            private getX: IGetX,
            private renderedNodes: IRenderedNodes,
            private safeDigest: ISafeDigestFn,
            private translateX: ITranslateX) { }

        public createInstance = (options: IRendererInstanceOptions) => {

            var instance = new VirtualRenderer(this.$compile, this.$injector, this.$interval, this.$timeout, this.getX, this.renderedNodes, this.safeDigest, this.translateX);

            instance.template = options.template;
            instance.items = options.items;
            instance.itemName = options.itemName;
            instance.scope = options.scope;
            instance.parentElement = options.parentElement;
            instance.guid = options.attributes["carouselGuid"];

            instance.viewPort = (<IViewPort>this.$injector.get("viewPort")).createInstance({
                parentElement: options.parentElement,
                scope: options.scope
            });

            instance.lastViewPortWidth = instance.viewPort.width;

            instance.$interval(() => {

                if (instance.lastViewPortWidth != instance.viewPort.width) {
                    instance.lastViewPortWidth = instance.viewPort.width;
                    instance.reRender();
                }
            }, 10, null, false);

            instance.container = (<IContainer>this.$injector.get("container")).createInstance({
                height: Number(options.attributes["carouselHeight"]),
                width: Number(options.attributes["carouselWidth"]) * options.items.length,
                parentElement: instance.viewPort.augmentedJQuery
            });

            instance.renderedNodes = (<IRenderedNodes>this.$injector.get("renderedNodes")).createInstance({
                container: instance.container
            });

            instance.container.htmlElement.addEventListener("transitionend", () => { instance.inTransition = false; });

            instance.navigation = (<INavigation>this.$injector.get("navigation")).createInstance({
                guid: instance.guid,
                parentElement: instance.viewPort.augmentedJQuery,
                scope: instance.scope
            });

            instance.scope = options.scope;

            instance.scope.onPrevious = instance.renderPrevious;

            instance.scope.onNext = instance.renderNext;

            return instance;
        }

        public render = (options: any) => {
            if (!this.hasRendered) this.initialRender();
        }

        public reRender = () => {
            this.translateX(this.container.htmlElement, 0);
            if (!this.scope.$$phase)
                this.scope.$digest();
        }

        public renderNext = () => {
            if (!this.inTransition) {
                this.inTransition = true;                
                var renderedNodes = this.renderedNodes.getAll({ orientation: "horizontal", order: "desc" });
                var numOfTransitions = renderedNodes.length;

                for (var i = 0; i < renderedNodes.length; i++) {
                    var node = renderedNodes[i].node;
                    this.translateX(renderedNodes[i].node, this.getX(renderedNodes[i].node) - this.lastViewPortWidth);

                    renderedNodes[i].node.addEventListener("transitionend", () => {
                        numOfTransitions = numOfTransitions - 1;

                        if (numOfTransitions === 0) {
                            this.container.turnOffTransitions();

                            var renderedNodes = this.renderedNodes.getAll({ orientation: "horizontal", order: "asc" });
                            var node = renderedNodes[0].node;
                            var currentLeft = node.offsetLeft;
                            var desiredX = this.lastViewPortWidth * (this.itemsCount - 1);
                            var delta = desiredX - currentLeft;
                            this.translateX(node, delta);
                            setTimeout(() => {
                                this.inTransition = false;
                                this.container.turnOnTransitions();
                            }, 0);
                        }
                    });
                }
                

            }
        }

        public renderPrevious = () => {
            if (!this.inTransition) {
                this.inTransition = true;
                this.container.turnOffTransitions();
                var renderedNodes = this.renderedNodes.getAll({ orientation: "horizontal", order: "desc" });
                var tailRenderedNode = renderedNodes[0];
                var currentLeft = tailRenderedNode.node.offsetLeft;
                var desiredX = this.lastViewPortWidth * (-1);
                var delta = desiredX - currentLeft;
                this.translateX(tailRenderedNode.node, delta);

                setTimeout(() => {
                    this.container.turnOnTransitions(); 
                    var renderedNodes = this.renderedNodes.getAll({ orientation: "horizontal", order: "asc" });
                    for (var i = 0; i < renderedNodes.length; i++) {
                        var node = renderedNodes[i].node;
                        this.translateX(renderedNodes[i].node, this.getX(renderedNodes[i].node) + this.lastViewPortWidth);
                    }
                    this.inTransition = false;
                }, 0);
            }
        }

        public get itemsCount(): number { return this.items.length; }

        public initialRender = () => {
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < this.itemsCount; i++) {
                
                var childScope: any = this.scope.$new(true);
                childScope[this.itemName] = this.items[i];
                childScope.$$index = i;
                childScope.viewPort = this.viewPort;
                childScope.container = this.container;
                var itemContent = this.$compile(angular.element(this.template))(childScope);
                itemContent.css("width", this.lastViewPortWidth);
                fragment.appendChild(itemContent[0]);
            }
            
            this.container.augmentedJQuery[0].appendChild(fragment);
            
            this.hasRendered = true;
            this.currentIndex = 0;
        }

        public _currentIndex:number;

        public get currentIndex() { return this._currentIndex; }

        public set currentIndex(value: number) { this._currentIndex = value; }

        public items: Array<any>;

        public scope: any;

        public itemName: string;

        public template: string;

        public hasRendered: boolean = false;

        public inTransition = false;

        public lastViewPortWidth: number = 0;

        public _guid: string;

        public get guid() { return this._guid; }

        public set guid(value: string) { this._guid = value; }

        public parentElement: ng.IAugmentedJQuery;

        public container: IContainer;

        public viewPort: IViewPort;

        public navigation: INavigation;

    }

    angular.module("carousel").service("virtualRenderer", ["$compile", "$injector", "$interval", "$timeout", "getX", "renderedNodes", "safeDigest", "translateX", VirtualRenderer]);
} 
/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class Renderer implements IRenderer {
        
        constructor(private $compile: ng.ICompileService,
            private $injector: ng.auto.IInjectorService,
            private $timeout: ng.ITimeoutService,
            private getX: IGetX,
            private translateX:ITranslateX) { }

        public createInstance = (options: IRendererInstanceOptions) => {
            var instance = new Renderer(this.$compile, this.$injector, this.$timeout, this.getX, this.translateX);

            instance.template = options.template;
            instance.items = options.items;
            instance.itemName = options.itemName;
            instance.scope = options.scope;
            instance.parentElement = options.parentElement;
            instance.guid = options.attributes["carouselGuid"];

            instance.viewPort = (<IViewPort>this.$injector.get("viewPort")).createInstance({
                height: Number(options.attributes["carouselHeight"]),
                width: Number(options.attributes["carouselWidth"]),
                parentElement: options.parentElement
            });

            instance.lastViewPortWidth = instance.viewPort.width;

            setInterval(() => {

                if (instance.lastViewPortWidth != instance.viewPort.width) {
                    instance.lastViewPortWidth = instance.viewPort.width;

                    instance.reRender();

                }
            }, 10);

            instance.container = (<IContainer>this.$injector.get("container")).createInstance({
                height: Number(options.attributes["carouselHeight"]),
                width: Number(options.attributes["carouselWidth"]) * options.items.length,
                parentElement: instance.viewPort.augmentedJQuery
            });

            instance.container.htmlElement.addEventListener('transitionend', () => {
                instance.inTransition = false;
            });

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

                var x = this.getX(this.container.htmlElement);

                if (x === (this.items.length * (-this.lastViewPortWidth)) + this.lastViewPortWidth) {
                    this.translateX(this.container.htmlElement, 0);
                } else {
                    this.translateX(this.container.htmlElement, x - this.lastViewPortWidth);
                }
                
            }

        }

        renderPrevious = () => {
            if (!this.inTransition) {

                this.inTransition = true;

                var x = this.getX(this.container.htmlElement);

                if (x === 0){
                    this.translateX(this.container.augmentedJQuery[0], x + (this.items.length * (-this.lastViewPortWidth)) + this.lastViewPortWidth);
                } else {
                    this.translateX(this.container.augmentedJQuery[0], x + this.lastViewPortWidth);
                }
            }
        }

        public initialRender = () => {
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < this.items.length; i++) {
                var childScope: any = this.scope.$new(true);
                childScope[this.itemName] = this.items[i];
                childScope.$$index = i;
                childScope.viewPort = this.viewPort;
                childScope.container = this.container;
                var itemContent = this.$compile(angular.element(this.template))(childScope);
                fragment.appendChild(itemContent[0]);
            }
            this.container.augmentedJQuery[0].appendChild(fragment);
            this.hasRendered = true;
        }

        public items: Array<any>;

        public scope: any;

        public itemName: string;

        public template: string;

        public hasRendered: boolean = false;

        public inTransition = false;

        public lastViewPortWidth:number = 0;

        public _guid: string;

        public get guid() { return this._guid; }

        public set guid(value:string) { this._guid = value; }

        public parentElement: ng.IAugmentedJQuery;

        public container: IContainer;

        public viewPort: IViewPort;

        public navigation: INavigation;
        
    }

    angular.module("election-carousel").service("renderer", ["$compile", "$injector", "$timeout","getX","translateX",Renderer]);
} 
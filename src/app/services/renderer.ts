/// <reference path="../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    "use strict";

    export class Renderer implements IRenderer {
        
        constructor(private $compile:ng.ICompileService, private $injector: ng.auto.IInjectorService, private $timeout:ng.ITimeoutService) { }

        public createInstance = (options: IRendererInstanceOptions) => {
            var instance = new Renderer(this.$compile,this.$injector, this.$timeout);

            instance.template = options.template;
            instance.items = options.items;
            instance.itemName = options.itemName;
            instance.scope = options.scope;
            instance.parentElement = options.parentElement;

            instance.viewPort = (<IViewPort>this.$injector.get("viewPort")).createInstance({
                height: Number(options.attributes["carouselHeight"]),
                width: Number(options.attributes["carouselWidth"]),
                parentElement: options.parentElement
            });

            instance.container = (<IContainer>this.$injector.get("container")).createInstance({
                height: Number(options.attributes["carouselHeight"]),
                width: Number(options.attributes["carouselWidth"]) * options.items.length,
                parentElement: instance.viewPort.augmentedJQuery
            });

            return instance;
        }

        public render = (options: any) => {
            if (!this.hasRendered) this.initialRender();
        }

        public initialRender = () => {
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < this.items.length; i++) {
                var childScope: any = this.scope.$new(true);
                childScope[this.itemName] = this.items[i];
                childScope.$$index = i;
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

        public parentElement: ng.IAugmentedJQuery;

        public container: IContainer;

        public viewPort: IViewPort;

    }

    angular.module("election-carousel").service("renderer", ["$compile","$injector","$timeout",Renderer]);
} 
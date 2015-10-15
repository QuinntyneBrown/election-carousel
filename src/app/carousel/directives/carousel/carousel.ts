
/// <reference path="../../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel {
    
    export class Carousel {

        constructor(private $interval: ng.IIntervalService, private getHtml: IGetHtmlFn, private renderer: IRenderer) { }

        public static createInstance = ($interval: ng.IIntervalService, getHtml: IGetHtmlFn, renderer: IRenderer) => {
            return new Carousel($interval,getHtml,renderer);
        }

        public restirct: string = "A";

        public transclude: string = 'element';

        public scope: any = false;

        public compile = (template: ng.IAugmentedJQuery) => {
            var renderer: IRenderer = this.renderer;
            var parentElement = template.parent();
            var getHtml: IGetHtmlFn = this.getHtml;

            return (scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes, controller: any, transclude: any) => {
                transclude(scope.$new(), (clone: ng.IAugmentedJQuery) => {
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
            }

            function parseItemName (attributes: ng.IAttributes):string {
                var match = attributes["carousel"].match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/);
                return match[1];
            }
            function parseItems(scope: ng.IScope, attributes: ng.IAttributes): Array<any> {
                var match = attributes["carousel"].match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/);
                if (match) {
                    var collectionStringArray = match[2].split(".");
                    var items: any = scope;
                    for (var i = 0; i < collectionStringArray.length; i++) {
                        items = items[collectionStringArray[i]];
                    }
                    return items;
                } else {
                    return JSON.parse(attributes["carousel"]);
                }
            }

            function removeCustomAttributes(clone: ng.IAugmentedJQuery, prefix: string) {
                var names: Array<string> = [];
                var attributes = clone[0].attributes;
                for (var i = 0; i < attributes.length; i++) {
                    if (attributes[i].nodeName.indexOf(prefix) > -1)
                        names.push(attributes[i].nodeName);
                }

                names.forEach((name: string) => { clone[0].removeAttribute(name); });

            }

            function verifyRepeatExpression(repeatExpression) {
                if (repeatExpression.match(/limitTo/) || repeatExpression.match(/startFrom/)) {
                    throw new Error('"limitTo" and "startFrom" filters are not allowed in directive');
                }
            };
        }

    }

    angular.module("carousel").directive("carousel", ["$interval", "getHtml","virtualRenderer",Carousel.createInstance]);
} 
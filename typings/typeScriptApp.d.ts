/// <reference path="tsd.d.ts" />

declare module ElectionCarousel {
    
    export interface ILocalStorageManager {
        createInstance(options?:any);
        get(): Array<any>;
        getByName(options: any): any;
        put(options:any):void;
    }

    export interface IIsMobileFn {
        ():boolean;
    }

    export interface IParty {
        createInstance(options:any):IParty;
        name: string;
        colorCode: string;
        partyCode:string;
    }

    interface ICandidate {
        createInstance(options: ICandidateInstanceOptions): ICandidate;
        name: string;
        firstName: string;
        lastName: string;
        votes: number;
        percentageOfTotalVotes: string;
        party: IParty;
        totalVotes:number;
    }

    export interface IGetHtmlFn {
        (who: HTMLElement, deep: boolean): string
    }

    export interface IRenderer {
        createInstance(options: IRendererInstanceOptions): IRenderer;
        render(options?: any): void;
    }

    export interface IRendererInstanceOptions {
        parentElement: ng.IAugmentedJQuery;
        template: string;
        attributes: ng.IAttributes;
        scope: any;
        items: Array<any>;
        itemName: string;
    }

    export interface IContainer {
        createInstance(options:IContainerInstanceOptions):IContainer;
        augmentedJQuery: ng.IAugmentedJQuery;
        htmlElement: HTMLElement;
    }

    export interface IViewPort {
        createInstance(options: IViewPortInstanceOptions): IViewPort;
        augmentedJQuery: ng.IAugmentedJQuery;
        width:number;
    }

    export interface IViewPortInstanceOptions {
        width: number;
        height: number;
        parentElement: ng.IAugmentedJQuery;
    }

    export interface IContainerInstanceOptions {
        width?: number;
        height?: number;
        parentElement: ng.IAugmentedJQuery;        
    }

    export interface IRiding {
        createInstance(options: IRidingInstanceOptions): IRiding;
        id:number;
        name: string;
        candidates: Array<ICandidate>;
        totalVotes: number;
        winningCandidate: ICandidate;
    }

    export interface IRidingsDataService {
        getAll(): ng.IPromise<any>;
    }

    export interface IRidingInstanceOptions {
        data:any;
    }

    export interface ICandidateInstanceOptions {
        data: any;
        totalVotes: number;
    }

    export interface INavigation {
        createInstance(options: INavigationInstanceOptions):INavigation;
    }

    export interface IGetX {
        (element: HTMLElement): number;
    }

    export interface INavigationInstanceOptions {
        guid: string;
        parentElement: ng.IAugmentedJQuery;
        scope:any;
    }

    export interface ITranslateX {
        (element: HTMLElement, value: number): HTMLElement;
    }
} 
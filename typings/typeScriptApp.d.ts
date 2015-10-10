/// <reference path="tsd.d.ts" />

declare module ElectionCarousel {
    
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
        riding: IRiding;
        percentageOfTotalVotes: string;
        isWinner: boolean;
        party: IParty;
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
        riding: IRiding;
    }
} 
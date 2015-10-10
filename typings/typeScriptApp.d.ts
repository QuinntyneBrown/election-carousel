/// <reference path="tsd.d.ts" />

declare module ElectionCarousel {
    
    export interface IParty {
        name: string;
        colorCode: string;
    }

    interface ICandidate {
        createInstance(options: ICandidateInstanceOptions): ICandidate;
        name: string;
        totalVotes: number;
        riding: IRiding;
        percentageOfTotalVotes: number;
        isWinner: boolean;
        party: IParty;
    }

    export interface IRiding {
        createInstance(options: IRidingInstanceOptions): IRiding;
        displayName: string;
        candidates: Array<ICandidate>;
        totalVotes: number;
        winningCandidate: ICandidate;
    }

    interface IRidingsDataService {
        getAll(): ng.IPromise<any>;
    }

    interface IRidingInstanceOptions {
        data:any;
    }

    interface ICandidateInstanceOptions {

    }
} 
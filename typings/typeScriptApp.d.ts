/// <reference path="tsd.d.ts" />

declare module ElectionCarousel {
    
    interface IParty {
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

    interface IRiding {
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

    }

    interface ICandidateInstanceOptions {

    }
} 
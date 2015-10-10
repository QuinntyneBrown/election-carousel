module ElectionCarousel {

    "use strict";

    export class Candidate implements ICandidate {
        constructor() { }

        public createInstance = (options: ICandidateInstanceOptions) => {
            var instance = new Candidate();
            return instance;
        }

        private _name: string;

        public get name() { return this._name; }

        public set name(value: string) { this._name; }

        private _totalVotes: number;

        public get totalVotes() { return this._totalVotes; }

        public set totalVotes(value: number) { this._totalVotes; }

        private _riding: IRiding;

        public get riding() { return this._riding; }

        public set riding(value: IRiding) { this._riding; }

        private _party: IParty;

        public get party() { return this._party; }

        public set party(value: IParty) { this._party; }


        public get percentageOfTotalVotes() { return this.totalVotes / this.riding.totalVotes; }

        public get isWinner(): boolean { return this.riding.winningCandidate.name == this.name; }

    }

    angular.module("election-carousel").service("candidate", [Candidate]);
} 
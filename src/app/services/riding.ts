module ElectionCarousel {

    "use strict";

    class Riding implements IRiding {
        constructor() { }

        public createInstance = (options: IRidingInstanceOptions) => {
            var instance = new Riding();

            return instance;
        }

        private _displayName: string;

        public get displayName() { return this._displayName; }

        public set displayName(value: string) { this._displayName; }

        private _candidates: Array<ICandidate>;

        public get candidates() { return this._candidates; }

        public set candidates(value: Array<ICandidate>) { this._candidates; }

        private _totalVotes: number;

        public get totalVotes() { return this._totalVotes; }

        public set totalVotes(value: number) { this._totalVotes; }

        private _winningCandidate: ICandidate;

        public get winningCandidate() { return this._winningCandidate; }

        public set winningCandidate(value: ICandidate) { this._winningCandidate; }

    }

    angular.module("election-carousel").service("riding", [Riding]);
} 
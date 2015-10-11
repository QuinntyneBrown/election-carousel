module ElectionCarousel {

    "use strict";

    export class Riding implements IRiding {
        constructor(private candidate: ICandidate) {}

        public createInstance = (options: IRidingInstanceOptions) => {
            var instance = new Riding(this.candidate);
            instance.id = options.data.id;
            instance.name = options.data.name;

            for (var i = 0; i < options.data.results.length; i++) {
                instance.totalVotes = instance.totalVotes + options.data.results[i].votes;
            }

            for (var i = 0; i < options.data.results.length; i++) {
                var candidate = this.candidate.createInstance({ totalVotes: instance.totalVotes, data: options.data.results[i] });

                var candidates = instance.candidates;
                candidates.push(candidate);
                instance.candidates = candidates;

                if (options.data.results[i].isElected)
                    instance.winningCandidate = candidate;
            }

            return instance;
        }

        private _id: number;

        public get id() { return this._id; }

        public set id(value: number) { this._id = value; }

        private _name: string;

        public get name() { return this._name; }

        public set name(value: string) { this._name = value; }

        private _candidates: Array<ICandidate> = [];

        public get candidates() {
            return this._candidates.sort((a: ICandidate, b: ICandidate) => { return b.votes - a.votes; });
        }

        public set candidates(value: Array<ICandidate>) { this._candidates = value; }

        private _totalVotes: number = 0;

        public get totalVotes() { return this._totalVotes; }

        public set totalVotes(value: number) { this._totalVotes = value; }

        private _winningCandidate: ICandidate;

        public get winningCandidate() { return this._winningCandidate; }

        public set winningCandidate(value: ICandidate) { this._winningCandidate = value; }

    }

    angular.module("election-carousel").service("riding", ["candidate",Riding]);
} 
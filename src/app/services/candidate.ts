module ElectionCarousel {

    "use strict";

    export class Candidate implements ICandidate {
        constructor(private $injector: ng.auto.IInjectorService, private percentageFilter:Function) { }

        public createInstance = (options: ICandidateInstanceOptions) => {
            var instance = new Candidate(this.$injector, this.percentageFilter);
            instance.party = (<IParty>this.$injector.get("party")).createInstance({ partyCode: options.data.partyCode });
            instance.name = options.data.name;
            instance.votes = options.data.votes;
            instance.isElected = options.data.isElected;
            instance.totalVotes = options.totalVotes;
            return instance;
        }

        public isElected: boolean;

        private _totalVotes: number;

        public get totalVotes() { return this._totalVotes; }

        public set totalVotes(value: number) { this._totalVotes = value; }

        private _name: string;

        public get name() { return this._name; }

        public set name(value: string) { this._name = value; }

        public get firstName() { return this.name.split(" ")[0]; }

        public get lastName() {
            var parts = this.name.split(" ");
            var results = [];
            for (var i = 1; i < parts.length; i++) { results.push(parts[i]); }
            return results.join(" ");
        }

        private _votes: number;

        public get votes() { return this._votes; }

        public set votes(value: number) { this._votes = value; }

        public get percentageOfTotalVotes() {            
            return this.percentageFilter(this._votes / this.totalVotes);
        }

        private _party: IParty;

        public get party() { return this._party; }

        public set party(value: IParty) { this._party = value; }


    }

    angular.module("election-carousel").service("candidate", ["$injector","percentageFilter",Candidate]);
} 
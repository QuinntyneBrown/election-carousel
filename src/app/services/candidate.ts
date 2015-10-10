module ElectionCarousel {

    "use strict";

    export class Candidate implements ICandidate {
        constructor(private $filter:ng.IFilterService,private $injector: ng.auto.IInjectorService) { }

        public createInstance = (options: ICandidateInstanceOptions) => {
            var instance = new Candidate(this.$filter, this.$injector);
            instance.party = (<IParty>this.$injector.get("party")).createInstance({ partyCode: options.data.partyCode });
            instance.name = options.data.name;
            instance.votes = options.data.votes;
            instance.riding = options.riding;
            return instance;
        }

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
            var value: any = (this._votes / this.riding.totalVotes);
            var percentage: any = this.$filter('number')(value, 3);
            return (percentage * 100) + "%";
        }

        private _riding: IRiding;

        public get riding() { return this._riding; }

        public set riding(value: IRiding) { this._riding = value; }

        private _party: IParty;

        public get party() { return this._party; }

        public set party(value: IParty) { this._party = value; }

        public get isWinner(): boolean { return this.riding.winningCandidate.name == this.name; }

    }

    angular.module("election-carousel").service("candidate", ["$filter","$injector",Candidate]);
} 
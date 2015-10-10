﻿module ElectionCarousel {

    "use strict";

    export class Riding implements IRiding {
        constructor(private candidate:ICandidate) { }

        public createInstance = (options: IRidingInstanceOptions) => {
            var instance = new Riding(this.candidate);
            instance.id = options.data.id;
            instance.displayName = options.data.name;
            
            for (var i = 0; i < options.data.results.length; i++) {
                instance.totalVotes = instance.totalVotes + options.data.results[i].votes;

                var candidate = this.candidate.createInstance({ riding: instance, data: options.data.results[i] });

                this.candidates.push(candidate);

                if (options.data.results[i].isElected)
                    this.winningCandidate = candidate;
            }

            return instance;
        }
        
        private _id: number;

        public get id() { return this._id; }
        
        public set id(value:number) { this._id = value; } 

        private _displayName: string;

        public get displayName() { return this._displayName; }

        public set displayName(value: string) { this._displayName; }

        private _candidates: Array<ICandidate> = [];

        public get candidates() { return this._candidates; }

        public set candidates(value: Array<ICandidate>) { this._candidates; }

        private _totalVotes: number = 0;

        public get totalVotes() { return this._totalVotes; }

        public set totalVotes(value: number) { this._totalVotes = value; }

        private _winningCandidate: ICandidate;

        public get winningCandidate() { return this._winningCandidate; }

        public set winningCandidate(value: ICandidate) { this._winningCandidate; }

    }

    angular.module("election-carousel").service("riding", ["candidate",Riding]);
} 
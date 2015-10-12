/// <reference path="../../../../../typings/typescriptapp.d.ts" />

module ElectionCarousel.Directives {

    export class CandidateList {
        constructor() { }

        public static createInstance = () => {
            
            return new CandidateList();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public scope:any = {
            candidates:"="
        }

        public templateUrl: string = "src/app/election/directives/candidateList/candidateList.html";

        public link = (scope: any, element: ng.IAugmentedJQuery, attributes: ng.IAttributes) => {
            
        }
    }

    angular.module("election").directive("candidateList", [CandidateList.createInstance]);
} 
module ElectionCarousel {

    "use strict";

    export class Party implements IParty {
        constructor() { }

        public createInstance = (options: any) => {
            var instance = new Party();
            instance.partyCode = options.partyCode;
            instance.id = options.id;
            return instance;
        }

        private _id: number;

        public get id() { return this._id; }

        public set id(value: number) { this._id = value; }

        private _name: string;

        public get name() { return this._name; }

        public set name(value: string) { this._name = value; }

        public get colorCode() {
            if (this.partyCode == "NDP")
                return "#ED5C27";

            if (this.partyCode == "PC")
                return "#0C499C";

            if (this.partyCode == "LIB")
                return "#D71923";

            if (this.partyCode == "GRN")
                return "#4C9F45";

            return "#DDD";
        }


        private _partyCode: string;

        public get partyCode() { return this._partyCode; }

        public set partyCode(value: string) { this._partyCode = value; }
    }

    angular.module("election-carousel").service("party", [Party]);
} 
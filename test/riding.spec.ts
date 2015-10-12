/// <reference path="../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    describe("riding", () => {

        var riding:IRiding;

        beforeEach(() => {
            angular.mock.module("election");
        });

        beforeEach(inject((_riding_:IRiding) => {
            riding = _riding_;
        }));

        it("should be defined", () => {
            expect(riding).toBeDefined();
        });

        it("should create an instance", () => {
            var instance = riding.createInstance({ data: data });
            expect(instance).toBeDefined();
            expect(instance instanceof ElectionCarousel.Riding).toEqual(true);
            expect(instance.name).toEqual("Annapolis");
            expect(instance.totalVotes).toEqual(10160);
            expect(instance.winningCandidate.name).toEqual("Stephen McNeil");
            expect(instance.winningCandidate.party.colorCode).toEqual("#D71920");
            expect(instance.winningCandidate.votes).toEqual(7709);
            expect(instance.winningCandidate.totalVotes).toEqual(10160);
            expect(instance.winningCandidate.percentageOfTotalVotes).toEqual("75.9%");
            expect(instance.candidates.length).toEqual(4);
            expect(instance.id).toEqual(1);
        });
    });

    var data = {
        id: 1,
        name: "Annapolis",
        num: 1,
        pollsReported: 57,
        pollsTotal: 57,
        results: [
            {
                name: "Henry Spurr",
                partyId: 13,
                votes: 834,
                isElected: false,
                partyCode: "NDP"
            },
            {
                name: "Stephen McNeil",
                partyId: 12,
                votes: 7709,
                isElected: true,
                partyCode: "LIB"
            },
            {
                name: "Ginny Hurlock",
                partyId: 14,
                votes: 1390,
                isElected: false,
                partyCode: "PC"
            },
            {
                name: "Ron Neufeld",
                partyId: 11,
                votes: 227,
                isElected: false,
                partyCode: "GRN"
            }
        ]
    };
} 
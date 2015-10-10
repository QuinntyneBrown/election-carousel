/// <reference path="../typings/typescriptapp.d.ts" />

module ElectionCarousel {

    describe("riding", () => {

        var riding:IRiding;

        beforeEach(() => {
            angular.mock.module("election-carousel");
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
            expect(instance.totalVotes).toEqual(10160);
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
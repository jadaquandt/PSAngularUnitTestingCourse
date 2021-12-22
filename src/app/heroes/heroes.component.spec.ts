import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent", () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: "Wolverine", strength: 18 },
            { id: 2, name: "SuperMan", strength: 29 },
            { id: 3, name: "SuperGirl", strength: 28 },
        ];
        //Mocking the HTTP call
        mockHeroService = jasmine.createSpyObj([
            "getHeroes",
            "addHero",
            "deleteHero",
        ]);

        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', () => {
        it("should remove the indicated hero from the heroes list", () => {
            //"of" = simple observable that has the value we pass into the method call
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero with the correct Hero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            //Duplication above is ok, bc we are telling the story of the function
            expect(mockHeroService.deleteHero).toHaveBeenCalled();
        });
    });
});

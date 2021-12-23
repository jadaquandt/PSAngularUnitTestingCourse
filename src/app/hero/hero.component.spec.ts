import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>;
    let component: HeroComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
        });
        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
    });

    it('should have the correct hero', () => {
        component.hero = { id: 1, name: 'SuperMan', strength: 3 };

        expect(component.hero.name).toEqual('SuperMan');
    })
})

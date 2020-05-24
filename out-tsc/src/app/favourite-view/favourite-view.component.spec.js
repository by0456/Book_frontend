import { async, TestBed } from '@angular/core/testing';
import { FavouriteViewComponent } from './favourite-view.component';
describe('FavouriteViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FavouriteViewComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FavouriteViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=favourite-view.component.spec.js.map
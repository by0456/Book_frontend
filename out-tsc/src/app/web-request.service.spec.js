import { TestBed } from '@angular/core/testing';
import { WebRequestService } from './web-request.service';
describe('WebRequestService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WebRequestService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=web-request.service.spec.js.map
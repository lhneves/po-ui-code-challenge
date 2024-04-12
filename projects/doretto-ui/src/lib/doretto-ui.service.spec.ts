import { TestBed } from '@angular/core/testing';

import { DorettoUiService } from './doretto-ui.service';

describe('DorettoUiService', () => {
  let service: DorettoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DorettoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

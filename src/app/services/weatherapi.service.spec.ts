import { TestBed } from '@angular/core/testing';

import { WeatherapiService } from './weatherapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherapiService', () => {
  let service: WeatherapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [WeatherapiService]
    });
    service = TestBed.inject(WeatherapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

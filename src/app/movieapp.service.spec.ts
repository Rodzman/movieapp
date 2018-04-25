import { TestBed, inject } from '@angular/core/testing';

import { MovieappService } from './movieapp.service';

describe('MovieappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieappService]
    });
  });

  it('should be created', inject([MovieappService], (service: MovieappService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { LightAmbientService } from './light-ambient.service';

describe('LightAmbientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LightAmbientService]
    });
  });

  it('should be created', inject([LightAmbientService], (service: LightAmbientService) => {
    expect(service).toBeTruthy();
  }));
});

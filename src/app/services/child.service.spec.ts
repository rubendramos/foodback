/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NenoService } from './neno.service';

describe('Service: Neno', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NenoService]
    });
  });

  it('should ...', inject([NenoService], (service: NenoService) => {
    expect(service).toBeTruthy();
  }));
});

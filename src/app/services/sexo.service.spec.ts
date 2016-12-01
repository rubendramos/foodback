/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SexoService } from './sexo.service';

describe('SexoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SexoService]
    });
  });

  it('should ...', inject([SexoService], (service: SexoService) => {
    expect(service).toBeTruthy();
  }));
});

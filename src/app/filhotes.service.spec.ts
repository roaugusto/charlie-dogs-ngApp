import { TestBed } from '@angular/core/testing';

import { FilhotesService } from './filhotes.service';

describe('FilhotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilhotesService = TestBed.get(FilhotesService);
    expect(service).toBeTruthy();
  });
});

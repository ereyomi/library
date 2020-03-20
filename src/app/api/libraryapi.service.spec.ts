import { TestBed } from '@angular/core/testing';

import { LibraryapiService } from './libraryapi.service';

describe('LibraryapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryapiService = TestBed.get(LibraryapiService);
    expect(service).toBeTruthy();
  });
});

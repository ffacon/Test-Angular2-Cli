/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BooksServiceService } from './books-service.service';

describe('BooksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksServiceService]
    });
  });

  it('should ...', inject([BooksServiceService], (service: BooksServiceService) => {
    expect(service).toBeTruthy();
  }));
});

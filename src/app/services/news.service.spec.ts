/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsService } from './news.service';

describe('NewsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsServiceService]
    });
  });

  it('should ...', inject([NewsServiceService], (service: NewsServiceService) => {
    expect(service).toBeTruthy();
  }));
});

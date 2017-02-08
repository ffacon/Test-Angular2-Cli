/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataContainerService } from './dataContainer.service';

describe('DataContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataContainerService]
    });
  });

  it('should ...', inject([DataContainerService], (service: DataContainerService) => {
    expect(service).toBeTruthy();
  }));
});

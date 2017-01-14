/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataContainerServiceService } from './data-container-service.service';

describe('DataContainerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataContainerServiceService]
    });
  });

  it('should ...', inject([DataContainerServiceService], (service: DataContainerServiceService) => {
    expect(service).toBeTruthy();
  }));
});

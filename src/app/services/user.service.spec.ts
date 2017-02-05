/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LocalStorageService } from './localStorage.service'


describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: UserService, useClass: UserService},
        {provide: LocalStorageService, useClass: LocalStorageService}
        
      ]
    });
  });

  it('should ...', inject([UserService, MockBackend,LocalStorageService], 
                  (service: UserService, mockBackend: MockBackend, localStorageService: LocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});

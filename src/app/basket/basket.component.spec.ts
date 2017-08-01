/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BasketComponent } from './basket.component';

import {Http, Response, ResponseOptions, BaseRequestOptions, ConnectionBackend, HttpModule} from '@angular/http';
import {FormsModule, FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MockBackend } from '@angular/http/testing';
import { MockRouter, MockActivatedRoute } from '../test/mocks/route';
import { MockUserService } from '../test/mocks/user.service';

import { UserService } from '../services/user.service';
import { LocalStorageService } from '../services/localStorage.service';

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  let mockUserService: MockUserService; 

  beforeEach(async(() => {
    mockUserService = new MockUserService();

    TestBed.configureTestingModule({
      declarations: [ BasketComponent ],
       imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule ],
      providers: [
        LocalStorageService,
        {provide: UserService, useClass: mockUserService},
        {provide: Router, useValue: MockRouter},
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
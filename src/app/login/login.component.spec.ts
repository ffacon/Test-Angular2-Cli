/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {Http, Response, ResponseOptions, BaseRequestOptions, ConnectionBackend, HttpModule} from '@angular/http';
import {FormsModule, FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


import {MockBackend} from '@angular/http/testing';
import {MockRouter} from '../test/mocks/route';
import {MockNewsService} from '../test/mocks/news.service';

import { LoginComponent } from './login.component';

import { UserService } from '../services/user.service';
import { LocalStorageService } from '../services/localStorage.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [ LoginComponent ],
      providers: [
        UserService, 
        LocalStorageService,
        MockRouter,
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: MockNewsService, useClass: MockNewsService},
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

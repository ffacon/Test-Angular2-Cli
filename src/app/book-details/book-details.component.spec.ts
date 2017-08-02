/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookDetailsComponent } from './book-details.component';

import {Http, Response, ResponseOptions, BaseRequestOptions, ConnectionBackend, HttpModule} from '@angular/http';
import {FormsModule, FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


import {MockBackend} from '@angular/http/testing';
import { MockRouter, MockActivatedRoute } from '../test/mocks/route';
import { MockNewsService } from '../test/mocks/news.service';
import { MockBooksService } from '../test/mocks/books.service';

import { NewsService } from '../services/news.service';
import { UserService } from '../services/user.service';
import { BooksService } from '../services/books.service';
import { LocalStorageService } from '../services/localStorage.service';




describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  let mockNewsService: MockNewsService;
  let mockBooksService: MockBooksService; 
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  beforeEach(async(() => {

    mockNewsService = new MockNewsService();
    mockBooksService = new MockBooksService(); 
    mockActivatedRoute = new MockActivatedRoute({'id': '1'});
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ],
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule ],
      providers: [
        UserService, 
        BooksService,
        LocalStorageService,
        {provide: NewsService, useClass: MockNewsService},
        {provide: BooksService, useClass: BooksService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: mockRouter},
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should get automatically book id 1', () => {
    const fixture = TestBed.createComponent(BookDetailsComponent);
    fixture.detectChanges();
    expect(component).toBeTruthy();
    //expect(mockBooksService.getBookSpy.wasCalled).toBeTruthy();
  });

});
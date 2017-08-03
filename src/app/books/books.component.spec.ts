/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Http, Response, ResponseOptions, BaseRequestOptions, ConnectionBackend, HttpModule} from '@angular/http';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


import { MockBackend} from '@angular/http/testing';
import { MockRouter, MockActivatedRoute } from '../test/mocks/route';
import { MockNewsService } from '../test/mocks/news.service';
import { MockBooksService } from '../test/mocks/books.service';

import { NewsService } from '../services/news.service';
import { UserService } from '../services/user.service';
import { BooksService } from '../services/books.service';
import { LocalStorageService } from '../services/localStorage.service';

import { BooksComponent } from './books.component';
import { KPagination } from '../components/kpagination/kpagination';

import { OrderByPipe } from '../pipes/order-by.pipe';
import { FilterFieldPipe } from '../pipes/filter-field.pipe';
import { UpdateDataPipe } from '../pipes/update-data.pipe';
import { DataContainerService } from '../services/data-container.service';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

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
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [ BooksComponent, 
                      KPagination,
                      FilterFieldPipe,
                      OrderByPipe,
                      UpdateDataPipe ],
      providers: [
        UserService, 
        LocalStorageService,
        DataContainerService,
        {provide: NewsService, useValue: mockNewsService},
        {provide: BooksService, useValue: mockBooksService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: mockRouter},
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },      
        {provide: MockBackend, useValue: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
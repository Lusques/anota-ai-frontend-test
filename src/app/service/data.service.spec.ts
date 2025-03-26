import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { Card } from '../models/card.model';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    service = TestBed.inject(DataService);

    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data from the API', () => {
    const mockCards: Card[] = [
      {
        id: 1,
        title: 'Title 1',
        description: 'description 1',
        img: '/images/icon.svg',
        type: '1',
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'description 2',
        img: '/images/icon.svg',
        type: '2',
      },
      {
        id: 3,
        title: 'Title 3',
        description: 'description 3',
        img: '/images/icon.svg',
        type: '3',
      },
    ];

    service.getData().subscribe((cards) => {
      expect(cards.length).toBe(3);
      expect(cards).toEqual(mockCards);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockCards);
  });

  afterEach(() => {
    httpMock.verify();
  });
});

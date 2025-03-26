import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardWrapperComponent } from './card-wrapper.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CardWrapperComponent', () => {
  let component: CardWrapperComponent;
  let fixture: ComponentFixture<CardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CardWrapperComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
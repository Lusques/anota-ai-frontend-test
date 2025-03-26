import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardWrapperComponent } from '../../components/card-wrapper/card-wrapper.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HomeComponent,
        HeaderComponent,
        CardWrapperComponent,
        SearchBarComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty searchQuery', () => {
    expect(component.searchQuery).toBe('');
  });

  it('should update searchQuery when receiving event from search bar', () => {
    const testQuery = 'test search';
    
    // Simula o evento vindo do SearchBarComponent
    component.onQueryReceived(testQuery);
    
    expect(component.searchQuery).toBe(testQuery);
  });

  it('should pass searchQuery to card-wrapper component', () => {
    const testQuery = 'another test';
    component.searchQuery = testQuery;
    fixture.detectChanges();
    
    const cardWrapperElement = fixture.debugElement.query(By.directive(CardWrapperComponent));
    const cardWrapperComponent = cardWrapperElement.componentInstance as CardWrapperComponent;
    
    expect(cardWrapperComponent.searchQuery).toBe(testQuery);
  });

  it('should render child components correctly', () => {
    const headerElement = fixture.debugElement.query(By.directive(HeaderComponent));
    const searchBarElement = fixture.debugElement.query(By.directive(SearchBarComponent));
    const cardWrapperElement = fixture.debugElement.query(By.directive(CardWrapperComponent));
    
    expect(headerElement).toBeTruthy();
    expect(searchBarElement).toBeTruthy();
    expect(cardWrapperElement).toBeTruthy();
  });
});
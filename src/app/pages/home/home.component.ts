import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardWrapperComponent } from '../../components/card-wrapper/card-wrapper.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardWrapperComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchQuery: string = '';

  onQueryReceived(query: string) {
    this.searchQuery = query;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Output() searchQuery = new EventEmitter<string>();

  updateSearchQuery(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.emit(input.value);
  }
}

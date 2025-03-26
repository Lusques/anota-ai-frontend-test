import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-card-wrapper',
  imports: [CardComponent],
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
})
export class CardWrapperComponent implements OnInit {
  items: Card[] = [];
  cardStatuses: boolean[] = [];
  @Input() searchQuery: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.items = response;
        this.cardStatuses = response.map(() => true);
      },
      error: (err) => {
        console.error('API Error: ', err);
      },
    });
  }

  ngOnChanges() {
    this.updateCardStatuses();
  }

  showCard(status: boolean, index: number) {
    this.cardStatuses[index] = status;
  }

  updateCardStatuses() {
    this.cardStatuses = this.items.map((item, index) =>
      this.matchesQuery(item)
    );
  }

  matchesQuery(card: Card): boolean {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) return true;
    return [card.title, card.description].some((field) =>
      field?.toLowerCase().includes(query)
    );
  }

  removeCard(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      this.cardStatuses.splice(index, 1);
    }
  }
}

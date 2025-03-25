import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-card-wrapper',
  imports: [CardComponent],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.scss',
})
export class CardWrapperComponent {
  items: Card[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.items = response;
      },
      error: (err) => {
        console.error('API Error: ', err);
      },
    });
  }
}

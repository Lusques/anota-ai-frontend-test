import { Component, Renderer2 } from '@angular/core';
import { DataService } from '../../service/data.service';
import { TypeStyle, Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  items: Card[] = [];

  constructor(private renderer: Renderer2, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.items = response;
      },
      error: (err) => {
        console.error('API Error: ', err);
      },
    });
  }

  removeCard(event: Event) {
    const button = event.target as HTMLElement;
    const card = button.closest('.list__item');

    if (card) {
      this.renderer.addClass(card, 'deleting');
      setTimeout(() => this.renderer.removeChild(card.parentNode, card), 300);
    }
  }

  typeStyles: Record<string, TypeStyle> = {
    '1': {
      label: 'Paisagem',
      backgroundColor: '#046EFE',
    },
    '2': {
      label: 'Flor',
      backgroundColor: '#FF004D',
    },
    '3': {
      label: 'Pizza',
      backgroundColor: '#958903',
    },
  };

  getTypeLabel(type: string): TypeStyle {
    return (
      this.typeStyles[type] || { label: 'Undefined', backgroundColor: '#555' }
    );
  }
}

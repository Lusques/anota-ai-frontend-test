import { Component, Input, Renderer2 } from '@angular/core';
import { DataService } from '../../service/data.service';
import { TypeStyle, Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private renderer: Renderer2, private dataService: DataService) {}

  removeCard(event: Event) {
    const button = event.target as HTMLElement;
    const card = button.closest('li');
    const appCard = button.closest('app-card');

    if (card) {
      this.renderer.addClass(card, 'card__animation--deleting');
      setTimeout(() => {
        this.renderer.removeChild(card.parentNode, card);
        if (appCard) {
          this.renderer.removeChild(appCard.parentNode, appCard);
        }
      }, 300);
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

  @Input() card: Card | undefined;
}

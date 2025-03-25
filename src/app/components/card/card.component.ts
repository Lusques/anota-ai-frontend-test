import { Component, Renderer2 } from '@angular/core';
// type string = '1' | '2' | '3';

interface TypeStyle {
  label: string;
  backgroundColor: string;
}
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  items = [
    {
      id: 1,
      title: 'Árvore',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-01.jpg',
      type: '1',
    },
    {
      id: 2,
      title: 'Flor',
      description:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-02.jpg',
      type: '2',
    },
    {
      id: 3,
      title: 'Fatia de pizza',
      description:
        'Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-03.jpg',
      type: '3',
    },
    {
      id: 4,
      title: 'Girassol',
      description:
        'It has survived not only five centuries, but also the leap into electronic typesetting.',
      img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-04.jpg',
      type: '2',
    },
    {
      id: 5,
      title: 'Pizza',
      description:
        "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-05.jpg',
      type: '3',
    },
    {
      id: 6,
      title: 'Pizza inteira',
      description:
        "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-06.jpg',
      type: '3',
    },
  ];

  // getTypeLabel(type: string): string {
  //   const label: { [key: string]: string } = {
  //     '1': 'Paisagem',
  //     '2': 'Flor',
  //     '3': 'Pizza',
  //   };
  //   return label[type] || 'undefined';
  // }

  constructor(private renderer: Renderer2) {}

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

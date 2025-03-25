import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CardComponent } from "../../components/card/card.component";
import { CardWrapperComponent } from "../../components/card-wrapper/card-wrapper.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardComponent, CardWrapperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

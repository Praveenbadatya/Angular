import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   imgUrl: string = '';
   MovieName: string = '';
   MovieDescription: string = '';
  
   onMovieClick() {
     console.log('Movie clicked');
   }
}

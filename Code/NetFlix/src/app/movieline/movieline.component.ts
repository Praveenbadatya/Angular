import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movieline',
  standalone: false,
  templateUrl: './movieline.component.html',
  styleUrl: './movieline.component.css'
})
export class MovielineComponent {
   @Input() movieLang = '';
   @Input() movieTitle = '';
   @Input() imgUrl = '';
}

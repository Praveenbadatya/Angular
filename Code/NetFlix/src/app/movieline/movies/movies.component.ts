import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
   @Input() imgUrl = '';
   @Input() movieTitle = '';
}

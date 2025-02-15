import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
   @Input() title = '';
   @Input() imageUrl = '';
   @Input() desc = '';
   @Input() price = '';
   showDetails = false;

   show() {
    if(this.showDetails)
      this.showDetails=false;
    else 
      this.showDetails=true;
   }
}

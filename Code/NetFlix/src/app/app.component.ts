import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NetFlix';
  click = false;
  onClick(){
     if(this.click){
       this.click = false;
     }else{
       this.click = true;
     }
  }
}

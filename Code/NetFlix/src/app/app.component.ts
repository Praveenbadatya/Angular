import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NetFlix';
  isclick = false;

  onClick(){
    console.log("hi")
     if(this.isclick){
       this.isclick = false;
       console.log(this.isclick)
     }else{
       this.isclick = true;
       console.log(this.isclick)
     }
  }
}

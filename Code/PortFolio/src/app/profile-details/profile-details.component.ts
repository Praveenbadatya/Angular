import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  standalone: false,
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {

  resume = false;
  msgBox = false;

  onClick(){
    this.msgBox = false;
    if(this.resume){
      this.resume = false;
    }
    else{
      this.resume = true;
    }
  }

  onMsgClick(){
    this.resume = false;
    if(this.msgBox){
      this.msgBox = false;
    }
    else{
      this.msgBox = true;
    }
  }
}

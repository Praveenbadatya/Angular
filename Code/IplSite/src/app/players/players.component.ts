import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: false,
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  rcbPlayers = 
  [
    {
      MImgae: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200214221027/Untitled-design-19.png',
      MName:'Virat Kholi'
    },
    {
      MImgae: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BvIaNFNQwvgHCQm_EuHPRBMgHjKciAdMK3HMZe0q45W1bVMNtfplS7wyzXZnxuvLgU8&usqp=CAU',
      MName:'Rajat Patidar'
    },
    {
      MImgae: '',
      MName:''
    },
    {
      MImgae: '',
      MName:''
    },
    {
      MImgae: '',
      MName:''
    },
  ]
}

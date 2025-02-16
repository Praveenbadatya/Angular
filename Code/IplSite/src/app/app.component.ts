import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IplSite';
  @Input() teamLogo = '';
  @Input() teamName = '';

  teams = 
  [
    {
      logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfpDPZ5AwBAPHlCvq7CrA4guqST4CaBAOYw&s',
      name:'RCB'
    },
    {
      logo:'https://img.jagranjosh.com/images/2024/March/1032024/csk-ipl-2024-schedule-compressed.jpg',
      name:'CSK'
    },
    {
      logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXA7KjwNZQUV_CUKKWG6qkr7HMtfZYQVKjUCkc4j1YqQWA_33LW7kSkNyXbojnzQluGU&usqp=CAU',
      name:'MI'
    },
    {
      logo:'https://i.pinimg.com/736x/b7/7d/f5/b77df59b1a5f0f209b94a0148ddb02d5.jpg',
      name:'SRH'
    },
    {
      logo:'https://preview.redd.it/if-you-had-to-make-a-kkr-squad-for-2024-from-complete-v0-jwsd9rd0oiub1.png?auto=webp&s=0deb8e9e1f546d22da3781d624342736cd8cb8e8',
      name:'KKR'
    },
    {
      logo:'https://i.cdn.newsbytesapp.com/images/l55120230324091158.jpeg',
      name:'PBKS'
    },
    {
      logo:'https://pbs.twimg.com/media/FMCYQl9akAQRBJ3.jpg:large',
      name:'GT'
    },
    {
      logo:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1200px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png',
      name:'RR'
    },
    {
      logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBt1CDY7T2WpZY2p3enPofyDBG4qAju4dXeg&s',
      name:'LSK'
    },
    {
      logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUnWdr6aQg05ZsJRI37g1M64dzPuJB5izag&s',
      name:'DC'
    }
  ]
}

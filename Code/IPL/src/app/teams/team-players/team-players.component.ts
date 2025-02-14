import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-team-players',
  standalone: false,
  templateUrl: './team-players.component.html',
  styleUrl: './team-players.component.css'
})
export class TeamPlayersComponent {
  @Input() teamLogo = '';
  @Input() teamName = '';
  showPlayers = false;
  
  onClick(){
    this.showPlayers = true;
  }
}

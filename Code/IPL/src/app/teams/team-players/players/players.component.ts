import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: false,
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  @Input() playerImage = '';
  @Input() playerName = '';
  //
  teamName = '';
}

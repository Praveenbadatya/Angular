import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-teams',
  standalone: false,
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  @Input() teamLogo = '';
  @Input() teamName = '';
}

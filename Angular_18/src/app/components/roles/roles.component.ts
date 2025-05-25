import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
   Name: string = "Praveen"
  angularVersion = "18.0.0";

  version: number = 18;

  currentDate: Date = new Date();

  isActive: boolean = true;
}

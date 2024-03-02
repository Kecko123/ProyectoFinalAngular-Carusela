import { Component } from '@angular/core';
import { User } from '../users/models';


@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent {
  displayedColumns: string[] = ['id', 'name', 'country', 'phonenumber', 'email', 'modify'];

  alumns: User[] = []

}

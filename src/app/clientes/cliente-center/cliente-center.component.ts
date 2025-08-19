import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from '../../common-components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-cliente-center',
  imports: [
    RouterOutlet,
    NavBarComponent,
  ],
  templateUrl: './cliente-center.component.html',
  styleUrl: './cliente-center.component.css'
})
export class ClienteCenterComponent {

}

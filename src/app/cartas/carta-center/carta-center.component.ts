import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from '../../common-components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-carta-center',
  imports: [
    RouterOutlet,
    NavBarComponent,
  ],  templateUrl: './carta-center.component.html',
  styleUrl: './carta-center.component.css'
})
export class CartaCenterComponent {

}

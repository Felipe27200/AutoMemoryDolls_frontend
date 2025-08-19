import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from '../../common-components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-doll-center',
  imports: [
    RouterOutlet,
    NavBarComponent,
  ],
  templateUrl: './doll-center.component.html',
  styleUrl: './doll-center.component.css'
})
export class DollCenterComponent {

}

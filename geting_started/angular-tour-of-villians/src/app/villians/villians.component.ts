import { Component } from '@angular/core';
import { Villian } from '../villian';
import { VILLIANS } from '../mock-villians';

@Component({
  selector: 'app-villians',
  templateUrl: './villians.component.html',
  styleUrls: ['./villians.component.css'],
})
export class VilliansComponent {
  // constructor() { }

  // villian = "Thanos"
  // villian: Villian = {
  //   id: 1,
  //   name: 'Thanos',
  //   // subname: "Titán Loco"
  // };

  villians: Villian[] = VILLIANS;
}

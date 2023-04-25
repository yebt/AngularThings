import { Component } from '@angular/core';
import { Villain } from '../villain';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent {
  villain: Villain = {
    id : 1,
    name : "General Mandible"
  }
}

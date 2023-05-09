import { Component, Input } from '@angular/core';
import { Villain } from '../villain';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.css']
})
export class VillainDetailComponent  {

  @Input() villaintd?: Villain;
  // constructor() { }
  //
  // ngOnInit(): void {
  // }

}

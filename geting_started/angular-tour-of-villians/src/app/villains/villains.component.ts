import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Villain } from '../villain';
import { VillainService } from '../villain.service';
// import { VILLIANS } from '../mock-villains';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css'],
})
export class VillainsComponent implements OnInit {
  // dependency injection
  constructor(
    private villainService: VillainService,
    private messageService: MessageService,
  ) { }
  // bad preactice call functions insiide the constructor
  // better practice use the on init
  ngOnInit(): void {
    this.getVillains();
  }

  // villains: Villain[] = VILLIANS; // remplaced with service
  villains: Villain[] = [];

  //   setter of fetch villains
  getVillains(): void {
    // replace of the async methiod
    // this.villains = this.villainService.getVillians()
    // this.villainService.getVilliansAsync()
    // .subscribe(
    //   villains_data  => this.villains = villains_data
    // )
    this.villainService.getVilliansAsync().subscribe({
      next: (value) => {
        this.villains = value;
      },
      error: (error) => {
        console.log('Error', error);
      },
    });
  }

  // REMOVED
  // selectedVillain?: Villain;

  // onSelect(villain: Villain): void {
  //   this.selectedVillain = villain;
  //   this.messageService.add(`VillainsComponent:  Selected Villain id => ${villain.id}`)
  // }

  // villain:  Villain = {
  //   id : 1,
  //   name: 'Thanos',
  //   nickname: 'The mad titan'
  // }
}

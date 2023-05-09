import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  villains: Villain[] = [];
  constructor(private villainService: VillainService) { }

  getVillains(): void {
    this.villainService.getVilliansAsync()
      .subscribe({
        next: (value) => this.villains = value.slice(1,5), // get the first 5 heroes
        error: (err) => { console.log("ERROR: ", err) }
      })
  }

  ngOnInit(): void {
    this.getVillains()
  }

}

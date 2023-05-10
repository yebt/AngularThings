import { Component, Input, OnInit } from '@angular/core';
import { Villain } from '../villain';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { VillainService } from '../villain.service';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.css']
})
export class VillainDetailComponent implements OnInit {

  // replace the go back function
  save(): void {
    if (this.villaintd) {
      this.villainServise.updateVillain(this.villaintd)
      .subscribe(
        () => this.goBack()
      )
    }
  }
  goBack(): void {
    this.location.back();
  }

  @Input() villaintd?: Villain;
  constructor(
    private route: ActivatedRoute,
    private villainServise: VillainService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getActualVillain()
  }

  getActualVillain(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    // this.villainServide.getVillianById(id)
    //   .subscribe({
    //     next: (villain) => { this.villaintd = villain },
    //     error: (err) => { console.log("Error:", err) }
    //   })

    this.villainServise.getVillianByIdHttp(id)
      .subscribe({
        next: (villain) => { this.villaintd = villain },
        error: (err) => { console.log("Error:", err) }
      })
  }

}

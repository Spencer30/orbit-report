import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countType() {
    console.log(this.satellites[5].type);
    console.log(this.satellites[5].type.toLowerCase());
    let debrisArr = [];
    for (let i=0; i<this.satellites.length; i++){
      if (this.satellites[i].type.toLowerCase() === 'space debris') {
        debrisArr.push(this.satellites[i].type);
    }
  }
  return debrisArr.length
}

}

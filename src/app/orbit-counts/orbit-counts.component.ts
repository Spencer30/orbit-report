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

  countDebris() {
    let debrisArr = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'space debris') {
        debrisArr.push(this.satellites[i].type);
      }
    }
    return debrisArr.length
  }

  countComm() {
    let comm = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'communication') {
        comm.push(this.satellites[i].type);
      }
    }
    return comm.length
  }

  countProbe() {
    let probe = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'probe') {
        probe.push(this.satellites[i].type);
      }
    }
    return probe.length
  }

  countPosition() {
    let position = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'positioning') {
        position.push(this.satellites[i].type);
      }
    }
    return position.length
  }

  countSS() {
    let spaceStat = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'space station') {
        spaceStat.push(this.satellites[i].type);
      }
    }
    return spaceStat.length
  }

  countTele() {
    let tele = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'telescope') {
        tele.push(this.satellites[i].type);
      }
    }
    return tele.length
  }

}

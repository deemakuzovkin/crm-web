import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nds',
  templateUrl: './nds.component.html',
  styleUrls: ['./nds.component.scss']
})
export class NdsComponent implements OnInit {

  sumWithNds = 1000.0;
  nds = 0.18;

  constructor() {
  }

  ngOnInit() {
  }

  setNds(input: string) {
    this.nds = parseFloat(input) / 100.0;
  }

  setsumWithNds(input: string) {
    this.sumWithNds = parseFloat(input);
  }

  get resultNds() {
    return this.sumWithNds * this.nds;
  }

}

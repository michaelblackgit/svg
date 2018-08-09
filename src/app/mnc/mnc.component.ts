import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mnc',
  templateUrl: './mnc.component.html',
  styleUrls: ['./mnc.component.css']
})
export class MncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  color: any = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    lightBlue: '#00FFCE',
    darkBlue: '#005FFF',
    yellow: '#c1c321',
    green: '#059005'
  };

  wire1: string;
  wire2: string;
  wire3: string;
  wire4: string;
  wire5: string;
  wire6: string;
  wire7: string;
  wire8: string;
  wire9: string;
  wire10: string;
  wire11: string;
  wire12: string;
  wire13: string;
  wire14: string;
  wire15: string;
  wire16: string;
  wire17: string;
  wire18: string;
  wire19: string;
  wire20: string;
  wire21: string;

  triangle1: string;
  triangle2: string;
  triangle3: string;

  box1: string;
  box2: string;

  ar1: string;
  ar2: string;
  ar3: string;
  ar4: string;
  ar5: string;
  ar6: string;
  ar7: string;
  ar7triangle: string;

  powermeter: string;
  powermeterbox: string;

  sleep(ms): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async demo(ms: number): Promise<any> {
    await this.sleep(ms);
    this.wire1 = this.color.green;
    await this.sleep(ms);
    this.triangle1 = this.color.green;
    await this.sleep(ms);
    this.wire2 = this.color.green;
    await this.sleep(ms);
    this.box1 = this.color.green;
    await this.sleep(ms);
    this.wire3 = this.color.green;
    this.wire4 = this.color.green;
    this.wire7 = this.color.green;
    await this.sleep(ms);
    this.wire5 = this.color.green;
    this.wire6 = this.color.green;
    this.triangle2 = this.color.green;
    await this.sleep(ms);
    this.ar1 = this.color.green;
    this.ar2 = this.color.green;
    this.wire8 = this.color.green;
    await this.sleep(ms);
    this.box2 = this.color.green;
    this.wire12 = this.color.yellow;
    await this.sleep(ms);
    this.wire9 = this.color.green;
    this.wire10 = this.color.green;
    await this.sleep(ms);
    this.wire11 = this.color.green;
    this.wire13 = this.color.yellow;
    this.wire14 = this.color.yellow;
    this.wire15 = this.color.yellow;
    this.wire16 = this.color.yellow;
    await this.sleep(ms);
    this.ar3 = this.color.green;
    this.triangle3 = this.color.yellow;
    await this.sleep(ms);
    this.wire17 = this.color.green;
    this.wire18 = this.color.lightBlue;
    await this.sleep(ms);
    this.ar4 = this.color.green;
    this.wire19 = this.color.lightBlue;
    await this.sleep(ms);
    this.ar5 = this.color.green;
    this.ar7 = this.color.lightBlue;
    this.ar7triangle = this.color.lightBlue;
    this.powermeter = this.color.lightBlue;
    this.powermeterbox = this.color.lightBlue;
    await this.sleep(ms);
    this.ar6 = this.color.green;
    this.wire20 = this.color.lightBlue;
    await this.sleep(ms);
    this.wire21 = this.color.lightBlue;
  }

  reset(): void {
    this.wire1 = this.color.black;
    this.wire2 = this.color.black;
    this.wire3 = this.color.black;
    this.wire4 = this.color.black;
    this.wire5 = this.color.black;
    this.wire6 = this.color.black;
    this.wire7 = this.color.black;
    this.wire8 = this.color.black;
    this.wire9 = this.color.black;
    this.wire10 = this.color.black;
    this.wire11 = this.color.black;
    this.wire12 = this.color.black;
    this.wire13 = this.color.black;
    this.wire14 = this.color.black;
    this.wire15 = this.color.black;
    this.wire16 = this.color.black;
    this.wire17 = this.color.black;
    this.wire18 = this.color.black;
    this.wire19 = this.color.black;
    this.wire20 = this.color.black;
    this.wire21 = this.color.black;

    this.triangle1 = this.color.white;
    this.triangle2 = this.color.white;
    this.triangle3 = this.color.white;

    this.box1 = this.color.black;
    this.box2 = this.color.black;

    this.ar1 = this.color.black;
    this.ar2 = this.color.black;
    this.ar3 = this.color.black;
    this.ar4 = this.color.black;
    this.ar5 = this.color.black;
    this.ar6 = this.color.black;
    this.ar7 = this.color.black;
    this.ar7triangle = this.color.green;

    this.powermeter = this.color.black;
    this.powermeterbox = this.color.white;
  }

  default(): void {
    this.demo(0);
  }
}

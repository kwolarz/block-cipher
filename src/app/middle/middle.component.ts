import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  plainText: string;
  key: any;

  constructor() {
    this.key = 'AABB09182736CCDD';
    this.plainText = this.hex2bin(this.key);
  }

  ngOnInit(): void {
  }

  hex2bin(hex: string): string {
    hex = '0x' + hex;
    hex = BigInt(hex).toString(2);
    return hex;
  }

}

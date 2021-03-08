import { Component, OnInit } from '@angular/core';
import { des } from './des';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  plainText: string;
  key: any;
  text: string;

  constructor() {
    this.key = 'AABB09182736CCDD';
    this.plainText = '123456ABCD132536';
    this.text = des(this.plainText, this.key, true);
  }

  ngOnInit(): void {
  }
}

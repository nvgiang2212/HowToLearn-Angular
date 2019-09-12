import {Component, OnInit} from '@angular/core';
import {isBoolean} from 'util';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  value = 0;

  changeCount(isAdd: boolean) {
    if (isAdd) {
      this.value = this.value + 1;
    } else {
      this.value = this.value - 1;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {isBoolean} from 'util';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // @ts-ignore
  @ViewChild(ChildComponent)
  myChild: ChildComponent;

  add() {
    this.myChild.value++;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

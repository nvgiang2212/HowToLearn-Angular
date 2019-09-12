import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() myClick = new EventEmitter<boolean>();

  addForParent() {
    this.myClick.emit(true);
  }

  subForParent() {
    this.myClick.emit(false);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

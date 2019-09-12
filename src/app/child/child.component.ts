import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() increaClick = new EventEmitter();

  addForParent() {
    this.increaClick.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }

}

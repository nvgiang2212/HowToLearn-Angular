import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  age: number;
  @Output() removeByName = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  removeName() {
    this.removeByName.emit(this.name);
  }
}

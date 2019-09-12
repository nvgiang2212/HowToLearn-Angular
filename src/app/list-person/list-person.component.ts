import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    {name: 'David', age: 34},
    {name: 'Sean', age: 21},
    {name: 'Taylor', age: 29}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  removeByPerson(name: string) {
    const index = this.arrPeople.findIndex(
      people => people.name === name
    );
    this.arrPeople.splice(index, 1);
  }
}

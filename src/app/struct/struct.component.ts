import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.scss']
})
export class StructComponent implements OnInit {
  isShow = true;
  arrSubjects = ['Angular', 'Nodejs', 'React'];

  constructor() {
  }

  ngOnInit() {
  }


}

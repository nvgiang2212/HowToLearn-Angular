import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  arrWords = [
    {id: 1, en: 'action', vn: 'Hanh dong', memorized: true},
    {id: 2, en: 'actor', vn: 'Dien vien', memorized: false},
    {id: 3, en: 'activity', vn: 'Hoat dong', memorized: true},
    {id: 4, en: 'active', vn: 'Chu dong', memorized: true},
    {id: 5, en: 'bath', vn: 'Tam', memorized: false},
    {id: 6, en: 'bedroom', vn: 'Phong ngu', memorized: true},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

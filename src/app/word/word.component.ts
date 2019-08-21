import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  en: string = 'when you say nothing at all';
  vn: string = 'Xin chao';
  imageUrl = '';
  forgot = true;

  humanName = '';
  isHightlight = false;
  evenStyle = {color: 'red', fontSize: '40px'};
  oddStyle = {color: 'yellow', fontSize: '20px'};

  toggleForgot() {
    this.forgot = !this.forgot;
  }

  showName(name) {
    this.humanName = name;
  }

  showImage(img) {
    this.imageUrl = img;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

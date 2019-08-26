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
  private newEn: string;
  private newVn: string;
  filterStatus: 'XEM_TAT_CA';
  isShowForm = false;

  addWord() {
    this.arrWords.push({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newVn = '';
    this.newEn = '';
    this.isShowForm = false;
  }

  removeWord(id: number) {
    const index = this.arrWords.findIndex(words => words.id === id);
    this.arrWords.splice(index, 1);
  }

  getShowStatus(memorized: boolean) {
    const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
    // @ts-ignore
    const dkXemDaNho = this.filterStatus === 'XEM_TU_DA_NHO' && memorized;
    // @ts-ignore
    const dkXemChuaNho = this.filterStatus === 'XEM_TU_CHUA_NHO' && !memorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

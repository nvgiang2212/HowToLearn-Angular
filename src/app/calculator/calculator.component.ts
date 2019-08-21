import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  num1: number;
  num2: number;
  output: number;
  operator = '+';

  onFirstChange(value) {
    this.num1 = Number(value);
  }

  onSecondChange(value) {
    this.num2 = Number(value);
  }

  onSelectChange(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.num1 + this.num2;
        break;
      case '-':
        this.output = this.num1 - this.num2;
        break;
      case '*':
        this.output = this.num1 * this.num2;
        break;
      case '/':
        this.output = this.num1 / this.num2;
        break;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
[x: string]: any;
questionList: any;
nextQuestion() {
throw new Error('Method not implemented.');
}
resetTest() {
throw new Error('Method not implemented.');

}
previousQuestion() {
throw new Error('Method not implemented.');
}
counter: any;
currentQuestion: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Quiz, Question, Answer } from '../quiz_structure';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent extends Quiz implements OnInit {

  private index: number; //Current question that the user is on

  constructor() {
    super();
    this.index = 0;
  }

  ngOnInit(): void {
  }

  getIndex(): number { return this.index; }

  first() { this.index = 0 };
  prev() { if (this.index > 0) this.index--; }
  next() { if (this.index < this.getNumOfQuestions() - 1) this.index++; }
  last() { this.index = this.getNumOfQuestions() - 1; }
}


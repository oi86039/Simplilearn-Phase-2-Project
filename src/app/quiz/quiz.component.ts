import { Component, OnInit } from '@angular/core';
import { Quiz, Question, Answer } from '../quiz_structure';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent extends Quiz implements OnInit {

  index: number; //Current question that the user is on

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  first() { this.index = 0 };
  prev() { if (this.index > 0) this.index--; }
  next() { if (this.index < this.getNumOfQuestions() - 1) this.index++; }
  last() { this.index = this.getNumOfQuestions() - 1; }
}


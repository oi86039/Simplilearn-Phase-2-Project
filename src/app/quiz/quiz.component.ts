import { Component, OnInit } from '@angular/core';
import { Quiz, Question, Answer } from '../quiz_structure';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: Quiz; //Load in Quiz from file
  index: number; //Current question that the user is on

  constructor() { }

  ngOnInit(): void {
    //Load in quiz object
    this.quiz = new Quiz();
  }

  first() { this.index = 0 };
  prev() { if (this.index > 0) this.index--; }
  next() { if (this.index < this.quiz.getNumOfQuestions() - 1) this.index++; }
  last() { this.index = this.quiz.getNumOfQuestions() - 1; }

  getQuestionText() { return this.quiz.getQuestion(this.index).getQuestionText(); }
  checkIfAnswered() { return this.quiz.getQuestion(this.index).checkIfAnswered; }
  checkIfMarkedForReview() { return this.quiz.getQuestion(this.index).checkIfMarkedForReview; }

  markAnswered() {this.quiz.getQuestion(this.index).markAnswered }
  markUnanswered() { this.quiz.getQuestion(this.index).markUnanswered }
  toggleMarkedForReview() { this.quiz.getQuestion(this.index).toggleMarkedForReview }

  getAnswer(index:number) {this.quiz.getQuestion(this.index).getAnswer(index)}

  getAnswerText(index:number) {this.quiz.getQuestion(this.index).getAnswerText(index)}
  selectAnswer(index:number) {this.quiz.getQuestion(this.index).selectAnswer(index) }
  checkIfUserCorrect(index:number) {this.quiz.getQuestion(this.index).getAnswer(index).checkIfUserCorrect}
}


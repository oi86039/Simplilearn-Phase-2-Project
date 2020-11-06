import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  private index: number; //Current question that the user is on

  constructor(private quizService: QuizServiceService) { //This will give the service copy of the quiz obj
    this.index = 0;
  }

  ngOnInit(): void {
  }

  //Quiz View Functions
  getIndex(): number { return this.index; }

  ifMarkedForReview() {
    if (this.quizService.getQuestion(this.index).checkIfMarkedForReview())
      return "Marked For Review";
    else
      return "";
  }

  first() { this.index = 0 };
  prev() { if (this.index > 0) this.index--; }
  next() { if (this.index < this.quizService.getNumOfQuestions() - 1) this.index++; }
  last() { this.index = this.quizService.getNumOfQuestions() - 1; }

  //Quiz Service Wrapper Functions
  getQuizName() { return this.quizService.getQuizName(); }
  getNumOfAnswered() { return this.quizService.getNumOfAnswered(); }
  getNumOfMarkedForReview() { return this.quizService.getNumOfMarkedForReview(); }
  getNumOfQuestions() { return this.quizService.getNumOfQuestions(); }
  getScore() { return this.quizService.getScore(); }
  getScoreFraction() { return this.quizService.getScoreFraction(); }
  getCurrentTime() { return this.quizService.getCurrentTime(); }
  getTotalTime() { return this.quizService.getTotalTime(); }
  getQuestion(index: number) { return this.quizService.getQuestion(index); }
}


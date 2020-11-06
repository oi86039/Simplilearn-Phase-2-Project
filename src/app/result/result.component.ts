import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private quizService: QuizServiceService) { }

  ngOnInit(): void {
  }

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

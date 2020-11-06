import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private quizService: QuizServiceService) {
  }

  ngOnInit(): void {
  }

  getQuizName(){return this.quizService.getQuizName()};

}

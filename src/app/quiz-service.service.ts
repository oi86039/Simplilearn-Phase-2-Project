import { Injectable } from '@angular/core';

import { Quiz } from './quiz_structure';


@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  
  private quiz: Quiz; //Quiz to be shared across all Angular components

  constructor() { 
    this.quiz = new Quiz();
  }

  getQuiz(){return this.quiz;}

}

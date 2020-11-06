import { Injectable } from '@angular/core';

import { Quiz } from './quiz_structure';

//Provides quiz to all components in angular that ask for it.

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService extends Quiz{
  
  constructor() { 
    super();
  }
  //This should now have all of the functions of the Quiz object
}

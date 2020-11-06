import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuizComponent } from './quiz/quiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';
import { ViewSelectComponent } from './view-select/view-select.component';

@NgModule({
  declarations: [
    QuizComponent,
    ReviewComponent,
    ResultComponent,
    ViewSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ViewSelectComponent]
})
export class AppModule { }

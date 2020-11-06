import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';
import { ViewSelectComponent } from './view-select/view-select.component';

@NgModule({
  declarations: [
    AppComponent,
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

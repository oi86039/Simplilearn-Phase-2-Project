import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-select',
  templateUrl: './view-select.component.html',
  styleUrls: ['./view-select.component.css']
})
export class ViewSelectComponent implements OnInit {

  //Each string is representative of a bool for css display. true="visible", false="hidden"
  quizViewIsVisible: string; //Is the Quiz View Visible?
  reviewViewIsVisible: string; //Is the Review View Visible?
  resultViewIsVisible: string; //Is the Results View Visible?

  //Each string is representative of a bool for css display. true="enabled", false="disabled"; can hide buttons with "hidden when on submit view"
  quizButtonIsActive: string; //If false, cannot click quiz button
  reviewButtonIsActive: string; //If true, cannot click review button
  resultButtonIsActive: string; //If true, cannot click review button

  //When view first starts
  constructor() {
    this.quizViewIsVisible = "visible";
    this.reviewViewIsVisible = "hidden";
    this.resultViewIsVisible = "hidden";

    this.quizButtonIsActive = "disabled";
    this.reviewButtonIsActive = "enabled";
    this.resultButtonIsActive = "enabled";
  }

  ngOnInit(): void {
  }

  ShowQuizView() {
    this.quizViewIsVisible = "visible";
    this.reviewViewIsVisible = "hidden";

    this.quizButtonIsActive = "disabled";
    this.reviewButtonIsActive = "enabled";
  }
  ShowReviewView() {
    this.quizViewIsVisible = "hidden";
    this.reviewViewIsVisible = "visible";

    this.quizButtonIsActive = "enabled";
    this.reviewButtonIsActive = "disabled";
  }
  ShowResultView() {
    this.quizViewIsVisible = "hidden";
    this.reviewViewIsVisible = "hidden";
    this.resultViewIsVisible = "visible";

    this.quizButtonIsActive = "hidden";
    this.reviewButtonIsActive = "hidden";
    this.resultButtonIsActive = "hidden";
  }
}

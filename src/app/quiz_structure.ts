import Quiz1 from '../assets/Quiz1.json';

export class Answer {
    private answerText: string; //The Answer
    private correct: boolean; //Is this answer correct?
    private selected: boolean; //Did the user select this answer?

    constructor(answerText: string, correct: boolean) {
        this.answerText = answerText;
        this.correct = correct;
        this.selected = false; //Always start as unselected
    }
    getAnswerText() { return this.answerText };

    checkIfUserCorrect() { return (this.correct && this.selected); }
    checkIfCorrect() { return this.correct; }
    checkIfSelected() { return this.selected; }

    toggleSelect() { this.selected = !this.selected; }
    select() { this.selected = true; }
    deselect() { this.selected = false; }
}

export class Question {
    private questionText: string; //The Question
    private answered: boolean; //Is at least one answer of this question selected?
    private markedForReview: boolean; //Override answered bool; did user mark for review
    private numOfAnswers: number; //Number of answers in list
    private answers: Answer[]; //List of all answers

    constructor(questionText: string, answers: Answer[]) {
        this.questionText = questionText;
        this.answers = answers; //parsed from JSON
        this.numOfAnswers = this.answers.length;
        this.answered = false; //Question should start unanswered
        this.markedForReview = false; //Question should start unmarked
    }

    getQuestionText() { return this.questionText; }
    getNumOfAnswers() {return this.numOfAnswers;}
    checkIfAnswered() { return this.answered; }
    checkIfMarkedForReview() { return this.markedForReview; }

    markAnswered() { this.answered = true; }
    markUnanswered() { this.answered = false }
    toggleMarkedForReview() { this.markedForReview = !this.markedForReview; }

    getAnswer(index: number) {
        if (index > this.answers.length - 1 || index < 0)
            console.log("Error: cannot get answer.");
        else return this.answers[index];
    }
    getAnswers() {return this.answers;}

    selectAnswer(index: number) {
        if (index > this.answers.length - 1 || index < 0)
            console.log("Error: Cannot select answer");
        else {
            //Disable all
            for (let i = 0; i < this.answers.length; i++) {
                this.answers[i].deselect();
            }
            //Then toggleSelect index given
            this.answers[index].toggleSelect();
        }
    }
    checkIfUserCorrect() {
        if (!this.answered) return false;
        else {
            for (let i of this.answers) {
                if (i.checkIfUserCorrect()) return true;
            }
            return false; //If none are true, user is incorrect
        }
    }

}

export class Quiz {
    private quizName: string; //Name of the quiz
    private numOfQuestions: number; //Number of Total Questions
    private score: number; //Number of Correct Questions
    private currentTime: number; //time elapsed in seconds
    private totalTime: number; //total time allowed in seconds
    private questions: Question[]; //List of questions

    constructor() {
        //Get other properties
        this.quizName = Quiz1.quizName;
        this.numOfQuestions = Quiz1.questions.length;
        this.score = 0;
        this.currentTime = 0;
        this.totalTime = Quiz1.timeLimit;
        this.questions = new Array();

        //Populate Questions
        for (let i = 0; i < this.numOfQuestions; i++) {
            //Make list of answers
            let answers: Answer[] = new Array();
            for (let j = 0; j < Quiz1.questions[i].answers.length; j++) {
                let a: Answer = new Answer(
                    Quiz1.questions[i].answers[j].answerText,
                    Quiz1.questions[i].answers[j].isCorrect
                );
                answers[j] = a;
            }
            //Make question with list of answers
            let q: Question = new Question(
                Quiz1.questions[i].questionText,
                answers
            );
            this.questions[i] = q;
        }
    }
    getQuizName() { return this.quizName; }
    getNumOfQuestions() { return this.numOfQuestions; }
    getScore() { return this.score; }
    getScoreFraction() { return this.score + "/" + this.numOfQuestions }
    getCurrentTime() { return this.currentTime; }
    getTotalTime() { return this.totalTime; }

    getQuestion(index: number) {
        if (index > this.questions.length - 1 || index < 0)
            console.log("Error: Cannot get question.");
        else return this.questions[index];
    }
}
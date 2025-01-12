import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-effective-communication',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './effective-communication.component.html',
  styleUrl: './effective-communication.component.css'
})
export class EffectiveCommunicationComponent {
  feedback: { [key: string]: string | undefined } = {};
  mcqFeedback1: { [key: number]: string } = {};
  mcqFeedback2: { [key: number]: string } = {};
  feedback2: { [key: string]: string | undefined } = {};
  feedback3: { [key: string]: string | undefined } = {};

  answers = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false
  };

  checkAnswer(option: string) {
    const correctAnswers = {
      option1: false,
      option2: true,
      option3: false,
      option4: true,
      option5: true,
      option6: true,
      option7: false
    };

    if (this.answers[option] === correctAnswers[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }

  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }

  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true'
    };

    this.mcqFeedback1[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }


  answers2 = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  };
  checkAnswer2(option: string) {
    const correctAnswers2 = {
      option1: true,
      option2: true,
      option3: true,
      option4: false,
      option5: false,
      option6: true,
      option7: true,
    };

    if (this.answers2[option] === correctAnswers2[option]) {
      this.feedback2[option] = '✔️'; // Correct answer
    } else {
      this.feedback2[option] = '❌'; // Incorrect answer
    }
  }

  answersFillUp = {
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  };

  // Validation function
  validateAnswerFillUp(input: string, correctAnswer: string): string {
    return input.trim().toUpperCase() === correctAnswer 
      ? '✔️'  // Correct answer
      : '❌'; // Incorrect answer
  }

  answers3 = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  };

  checkAnswer3(option: string) {
    const correctAnswers3 = {
      option1: true,
      option2: false,
      option3: false,
      option4: true,
      option5: false,
      option6: true,
      option7: false,
    };

    if (this.answers3[option] === correctAnswers3[option]) {
      this.feedback3[option] = '✔️'; // Correct answer
    } else {
      this.feedback3[option] = '❌'; // Incorrect answer
    }
  }
}

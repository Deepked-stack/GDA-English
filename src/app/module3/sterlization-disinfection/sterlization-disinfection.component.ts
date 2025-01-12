import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sterlization-disinfection',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './sterlization-disinfection.component.html',
  styleUrl: './sterlization-disinfection.component.css'
})
export class SterlizationDisinfectionComponent {
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }

  mcqFeedback1: { [key: number]: string } = {};

  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback1[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  mcqFeedback2: { [key: number]: string } = {};

  checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
  answers = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
     };
  feedback: { [key: string]: string | undefined } = {};

  checkAnswer(option: string) {
    const correctAnswers = {
      option1: false,
      option2: false,
      option3: true,
      option4: false,
      option5: true,
      option6: true,
     
    };

    if (this.answers[option] === correctAnswers[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }

  answers2 = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
  };
  feedback2: { [key: string]: string | undefined } = {};

  // Exercise 2 (7 questions) answers
  checkAnswer2(option: string) {
    const correctAnswers2 = {
      option1: true,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
      option6: true,
      option7: true,
      option8: true,
    };

    if (this.answers2[option] === correctAnswers2[option]) {
      this.feedback2[option] = '✔️'; // Correct answer
    } else {
      this.feedback2[option] = '❌'; // Incorrect answer
    }
  }


}

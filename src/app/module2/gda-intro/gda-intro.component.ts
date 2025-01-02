import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gda-intro',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './gda-intro.component.html',
  styleUrls: ['./gda-intro.component.css']
})
export class GDAIntroComponent {
  mcqFeedback1: { [key: number]: string } = {};
  mcqFeedback2: { [key: number]: string } = {};
  mcqFeedback3: { [key: number]: string } = {};


  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'More',
      2: 'General Duty Assistant',
    };

    this.mcqFeedback1[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }


  
  checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'False',
      2: 'None',
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  checkMCQ3(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'GDA',
      2: 'poscomm',
      3: 'Confidentiality',
      4: 'All',
      5: 'All',
    };

    this.mcqFeedback3[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  cardStatus: { [key: number]: boolean | undefined } = {};

  // Method to update the card status
  checkAnswer(cardId: number, isCorrect: boolean): void {
    this.cardStatus[cardId] = isCorrect;
  }

}

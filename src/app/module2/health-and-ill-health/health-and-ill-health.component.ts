import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-health-and-ill-health',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './health-and-ill-health.component.html',
  styleUrl: './health-and-ill-health.component.css'
})
export class HealthAndIllHealthComponent {
  yesColor: string = ''; // Default color for the Yes button
  noColor: string = '';  // Default color for the No button
 
  selectOption(option: string) {
    if (option === 'yes') {
      this.yesColor = '#aafb83';
      this.noColor = ''; // Reset No button color
    } else if (option === 'no') {
      this.noColor = '#ff9185';
      this.yesColor = ''; // Reset Yes button color
    }
  }

  // next
  isNoteVisible: boolean = false;

  toggleNote() {
    this.isNoteVisible = !this.isNoteVisible;
  }

  // next
  cardStatus: { [key: number]: boolean | undefined } = {};

  // Method to update the card status
  checkAnswer(cardId: number, isCorrect: boolean): void {
    this.cardStatus[cardId] = isCorrect;
  }


  mcqFeedback: { [key: number]: string } = {};

  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'True',
      2: 'correct',
    };

    this.mcqFeedback[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
  feedback: { [key: string]: string | undefined } = {};

  answersch = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  };

  checkAnswerch(option: string) {
    const correctAnswers = {
      option1: true,
      option2: false,
      option3: true,
      option4: false,
      option5: true,
    };

    if (this.answersch[option] === correctAnswers[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }

  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }

}

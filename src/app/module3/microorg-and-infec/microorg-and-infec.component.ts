import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-microorg-and-infec',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './microorg-and-infec.component.html',
  styleUrl: './microorg-and-infec.component.css'
})
export class MicroorgAndInfecComponent {
  
  cardStatus: { [key: number]: boolean | undefined } = {};

  checkAnswercard(cardId: number, isCorrect: boolean): void {
    this.cardStatus[cardId] = isCorrect;
  }

  isNoteVisible: boolean = false;

  toggleNote() {
    this.isNoteVisible = !this.isNoteVisible;
  }
// for assessbutton
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }
  
// mcq1
  mcqFeedback1: { [key: number]: string } = {};

  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true'
    };

    this.mcqFeedback1[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
  answers = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7 :false,
    option8 :false
  };
  feedback: { [key: string]: string | undefined } = {};

  checkAnswer(option: string) {
    const correctAnswers = {
      option1: false,
      option2: true,
      option3: true,
      option4: true,
      option5: true,
      option6: false,
      option7: true,
      option8: true
    };

    if (this.answers[option] === correctAnswers[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }
  leftItems = [
    { id: 1, text: 'Question 1', correct: false },
    { id: 2, text: 'Question 2', correct: false },
    { id: 3, text: 'Question 3', correct: false },
    { id: 4, text: 'Question 4', correct: false },
    { id: 5, text: 'Question 5', correct: false },
    { id: 6, text: 'Question 6', correct: false },
    { id: 7, text: 'Question 7', correct: false },
  ];
  
  rightItems = [
    { id: 3, text: 'Blood', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Inoculation', correct: false, incorrect: false, matchedWith: null },
    { id: 5, text: 'Vector borne route', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Airborne route through droplets', correct: false, incorrect: false, matchedWith: null },
    { id: 7, text: 'Food', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'Direct Contact', correct: false, incorrect: false, matchedWith: null },
    { id: 6, text: 'Indirect Contact', correct: false, incorrect: false, matchedWith: null },
  ];
  
  
  selectedItem: any = null;
  
  selectLeftItem(item: any) {
    if (!item.correct) {
      this.selectedItem = item;
    }
  }
  
  matchWithRightItem(targetItem: any) {
    if (this.selectedItem && !targetItem.correct) {
      if (this.selectedItem.id === targetItem.id) {
        // Correct match
        this.selectedItem.correct = true;
        targetItem.correct = true;
        targetItem.matchedWith = this.selectedItem.id;
  
        // Clear selection
        this.selectedItem = null;
      } else {
        // Incorrect match
        targetItem.incorrect = true;
        setTimeout(() => {
          targetItem.incorrect = false;
        }, 2000);
      }
    }
  }

}

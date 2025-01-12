import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medication-routes-and-admn',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './medication-routes-and-admn.component.html',
  styleUrl: './medication-routes-and-admn.component.css'
})
export class MedicationRoutesAndAdmnComponent {
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  } 
  
  mcqFeedback1: { [key: number]: string } = {};

  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true',
      4: 'true',
      5: 'true',
      6: 'true',
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
     };
  feedback: { [key: string]: string | undefined } = {};

  checkAnswer(option: string) {
    const correctAnswers = {
      option1: true,
      option2: true,
      option3: true,
      option4: true,
      option5: false,
      
     
    };

    if (this.answers[option] === correctAnswers[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }

  leftItems = [
    { id: 1, text: 'Intravenously', correct: false },
    { id: 2, text: 'Intramuscularly', correct: false },
    { id: 3, text: 'Inthrathecally', correct: false },
    { id: 4, text: 'subcutaneously', correct: false },
    
  ];
  
  rightItems = [
    { id: 3, text: 'through the area of the spinal cord', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'under the skin', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'through a vein', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'through a muscle', correct: false, incorrect: false, matchedWith: null },
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

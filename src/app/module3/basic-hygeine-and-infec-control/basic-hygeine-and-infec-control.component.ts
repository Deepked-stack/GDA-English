import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-hygeine-and-infec-control',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './basic-hygeine-and-infec-control.component.html',
  styleUrl: './basic-hygeine-and-infec-control.component.css'
})
export class BasicHygeineAndInfecControlComponent {

    @Input() selectedState: 'start' | 'learn' | 'do' | null = null;
  
  leftItems = [
    { id: 1, text: 'Question 1', correct: false },
    { id: 2, text: 'Question 2', correct: false },
    { id: 3, text: 'Question 3', correct: false },
    { id: 4, text: 'Question 4', correct: false },
    { id: 5, text: 'Question 5', correct: false },
    
  ];
  
  rightItems = [
    { id: 3, text: 'Tool used to keep the hands safe from any kind of infection', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'Tool and method used for hand hygiene', correct: false, incorrect: false, matchedWith: null },
    { id: 5, text: 'Tool used to keep work suit safe from any infection or patient’s body fluids', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Tools used when caring for persons with highly infectious diseases', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Tools used for disinfection', correct: false, incorrect: false, matchedWith: null },

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

  leftItems2 = [
    { id: 1, text: 'Question 1', correct: false },
    { id: 2, text: 'Question 2', correct: false },
    { id: 3, text: 'Question 3', correct: false },
    ];
  
  rightItems2 = [
    { id: 3, text: 'The work wear must be worn at the workplace. The uniform must be changed daily', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Long hair and beard should be fastened up so that it does not hang or fall down in your working space', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Obtaining a good hand hygiene is crucial. Sometimes hand washing with water and soap and sometimes hand disinfection', correct: false, incorrect: false, matchedWith: null },
  ];
  
  selectedItem2: any = null;
  
  selectLeftItem2(item: any) {
    if (!item.correct) {
      // Deselect previous item if any, and select the new item
      this.selectedItem2 = item;
    }
  }
  
  matchWithRightItem2(targetItem2: any) {
    if (this.selectedItem2 && !targetItem2.correct) {
      if (this.selectedItem2.id === targetItem2.id) {
        // Correct match
        this.selectedItem2.correct = true;
        targetItem2.correct = true;
        targetItem2.matchedWith = this.selectedItem2.id;
  
        // Clear selection
        this.selectedItem2 = null;
      } else {
        // Incorrect match
        targetItem2.incorrect = true;
        setTimeout(() => {
          targetItem2.incorrect = false;
        }, 2000);
      }
    }
  }
  
// for assessbutton
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }
  
  // formcqs

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

  mcqFeedback2: { [key: number]: string } = {};

  checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  mcqFeedback3: { [key: number]: string } = {};

  checkMCQ3(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback3[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  mcqFeedback4: { [key: number]: string } = {};

  checkMCQ4(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback4[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
  mcqFeedback5: { [key: number]: string } = {};

  checkMCQ5(questionNumber: number, selectedAnswer: string) {
    const correctAnswers = {
      1: 'true',
      2: 'true',
      3: 'true',
    };
  
    this.mcqFeedback5[questionNumber] = 
    selectedAnswer === correctAnswers[questionNumber] ? '✔️' : '❌';
  }
  
  mcqFeedback6: { [key: number]: string } = {};

  checkMCQ6(questionNumber: number, selectedAnswer: string) {
    const correctAnswers = {
      1: 'true',
      2: 'true',
      3: 'true',
      4: 'true',
      5: 'true',
      6: 'true'
    };
  
    this.mcqFeedback6[questionNumber] = 
    selectedAnswer === correctAnswers[questionNumber] ? '✔️' : '❌';
  }
  
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-biomedical-waste-mgmnt',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './biomedical-waste-mgmnt.component.html',
  styleUrl: './biomedical-waste-mgmnt.component.css'
})
export class BiomedicalWasteMgmntComponent {
  leftItems = [
    { id: 1, text: 'Question 1', correct: false },
    { id: 2, text: 'Question 2', correct: false },
    { id: 3, text: 'Question 3', correct: false },
    { id: 4, text: 'Question 4', correct: false },
    { id: 5, text: 'Question 5', correct: false },
    
  ];
  
  rightItems = [
    { id: 3, text: 'Expired Medicines', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'Waste from Laboratory', correct: false, incorrect: false, matchedWith: null },
    { id: 5, text: 'Human Tissue Waste', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Rubber waste from disposables', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Kitchen Waste', correct: false, incorrect: false, matchedWith: null },

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
      3: 'true'
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  mcqFeedback3: { [key: number]: string } = {};

  checkMCQ3(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true',
      4: 'true',
      5: 'true'
    };

    this.mcqFeedback3[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  mcqFeedback4: { [key: number]: string } = {};

  checkMCQ4(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true',
      4: 'true',
      5: 'true'
    };

    this.mcqFeedback4[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  // Bins table (bin images and their IDs)
  bins = [
    {
      id: 1,
      image: 'bin_yellow.png',
      feedback1: '',
      feedback2: '',
      feedback1Class: '',
      feedback2Class: '',
    },
    {
      id: 2,
      image: 'bin_red.png',
      feedback1: '',
      feedback2: '',
      feedback1Class: '',
      feedback2Class: '',
    },
    {
      id: 3,
      image: 'bin_blue.png',
      feedback1: '',
      feedback1Class: '',
    }, // Single input for blue bin
    {
      id: 4,
      image: 'bin_black.png',
      feedback1: '',
      feedback2: '',
      feedback1Class: '',
      feedback2Class: '',
    },
    {
      id: 5,
      image: 'bin_white.png',
      feedback1: '',
      feedback2: '',
      feedback1Class: '',
      feedback2Class: '',
    },
  ];

  // Validation function
  validateInput(event: Event, binId: number, inputNumber: number) {
    const input = parseInt((event.target as HTMLInputElement).value, 10);

    // Expected IDs for each bin
    const correctIds = {
      1: [1, 6], // Yellow bin accepts IDs 1 and 6
      2: [2, 5], // Red bin accepts IDs 2 and 5
      3: [3],    // Blue bin accepts ID 3
      4: [4, 8], // Black bin accepts IDs 4 and 8
      5: [7, 9], // White bin accepts IDs 7 and 9
    };

    // Check if the input matches
    if (correctIds[binId].includes(input)) {
      if (inputNumber === 1) {
        this.bins[binId - 1].feedback1 = '✔'; // Tick for correct input
        this.bins[binId - 1].feedback1Class = 'correct';
      } else if (inputNumber === 2) {
        this.bins[binId - 1].feedback2 = '✔'; // Tick for correct input
        this.bins[binId - 1].feedback2Class = 'correct';
      }
    } else {
      if (inputNumber === 1) {
        this.bins[binId - 1].feedback1 = '✖'; // Cross for incorrect input
        this.bins[binId - 1].feedback1Class = 'incorrect';
      } else if (inputNumber === 2) {
        this.bins[binId - 1].feedback2 = '✖'; // Cross for incorrect input
        this.bins[binId - 1].feedback2Class = 'incorrect';
      }
    }
  }

  sequence = [
    { question: 'Treatment', answer: 4, userInput: null, validated: undefined },
    { question: 'Storage', answer: 2, userInput: null, validated: undefined },
    { question: 'Segregation and Collection', answer: 1, userInput: null, validated: undefined },
    { question: 'Transportation', answer: 3, userInput: null, validated: undefined }

  ];

  validatesequence(index: number): void {
    const userInput = this.sequence[index].userInput;
    const correctAnswer = this.sequence[index].answer;
    
    // Check if user input is valid and matches the correct answer
    this.sequence[index].validated = (userInput === correctAnswer);
  }
}

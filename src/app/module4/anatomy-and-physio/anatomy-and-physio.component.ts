import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anatomy-and-physio',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './anatomy-and-physio.component.html',
  styleUrl: './anatomy-and-physio.component.css'
})
export class AnatomyAndPhysioComponent {
  leftItems = [
    { id: 1, text: 'Question 1', correct: false },
    { id: 2, text: 'Question 2', correct: false },
    { id: 3, text: 'Question 3', correct: false },
    { id: 4, text: 'Question 4', correct: false },
    { id: 5, text: 'Question 5', correct: false },
    
  ];
  
  rightItems = [
    { id: 3, text: 'Upper and Lower Limbs', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Head and Neck', correct: false, incorrect: false, matchedWith: null },
    { id: 5, text: 'Lungs', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Kidneys', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'Thorax', correct: false, incorrect: false, matchedWith: null },
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
      3: 'true',
      4: 'true',
      5: 'true',
      6: 'true',
    };

    this.mcqFeedback1[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
// ----------------------------------------------------
  mcqFeedback2: { [key: number]: string } = {};

  checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true',
      4: 'true',
      5: 'true'
     
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  // -------------------------------------------------------
  leftItems2 = [
    { id: 1, text: 'Question 1', correct: false },
    { id: 2, text: 'Question 2', correct: false },
    { id: 3, text: 'Question 3', correct: false },
    ];
  
  rightItems2 = [
    { id: 3, text: 'The nucleus holds the key information about the genetic code of the organisms', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Having knowledge about the cell is crucial in understanding anatomy.', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Cells can be divided in two different categories', correct: false, incorrect: false, matchedWith: null },
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

  mcqFeedback3: { [key: number]: string } = {};

  checkMCQ3(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true',
      4: 'false',
      5: 'true',
      6: 'true',
      7: 'false',
      8: 'false',
     
    };

    this.mcqFeedback3[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  } 

  
correctAnswers: { [key: number]: string } = {
  1: 'oncology',
  2: 'OPD',
  3: 'anaesthesia',
  4: 'pharmacy',
  5: 'lungs',
  6: 'maternity',
  7: 'premature',
  8: 'prescription',
};

// User Inputs
answers: { [key: number]: string } = {};

// Result Tracking
showResults = false;
isCorrect = false;

// Check User Answers
checkAnswers() {
  this.showResults = true;
  this.isCorrect = Object.keys(this.correctAnswers).every(
    (key) => this.correctAnswers[key] === this.answers[+key]?.trim()
  );
}

// Variables for each question's correct answer
answersMap: { [key: string]: number } = {
  fillup1: 4,
  fillup2: 1,
  fillup3: 6,
  fillup4: 7,
  fillup5: 2,
  fillup6: 3,
  fillup7: 5,
  
};

// Function to validate user input
validateAnswer(inputId: string, correctAnswer: number): void {
  const inputElement = document.getElementById(inputId) as HTMLInputElement;
  const userAnswer = parseInt(inputElement.value, 10);

  // Add or remove validation styles
  if (userAnswer === correctAnswer) {
    inputElement.classList.add("correct");
    inputElement.classList.remove("incorrect");
    this.addTickOrCross(inputId, "✓");
  } else {
    inputElement.classList.add("incorrect");
    inputElement.classList.remove("correct");
    this.addTickOrCross(inputId, "✗");
  }
}

// Function to display tick or cross beside the input
addTickOrCross(inputId: string, symbol: string): void {
  let tickCrossElement = document.querySelector(`#${inputId} + .tick-cross`);
  
  if (!tickCrossElement) {
    tickCrossElement = document.createElement("span");
    tickCrossElement.classList.add("tick-cross");
    document.getElementById(inputId)?.after(tickCrossElement);
  }
  
  tickCrossElement.textContent = symbol;
}
sequence = [
  { question: ' Pancreas', answer: 6, userInput: null, validated: undefined },
  { question: ' Anus/Anal canal', answer: 9, userInput: null, validated: undefined },
  { question: ' Salivary glands', answer: 2, userInput: null, validated: undefined },
  { question: ' Mouth', answer: 1, userInput: null, validated: undefined },
  { question: ' stomach', answer: 4, userInput: null, validated: undefined },
  { question: ' Liver', answer: 5, userInput: null, validated: undefined },
  { question: ' Large and small intestine', answer: 7, userInput: null, validated: undefined },
  { question: ' Rectum', answer: 8, userInput: null, validated: undefined },
  { question: ' Oesophagus', answer: 3, userInput: null, validated: undefined },
];

validatesequence(index: number): void {
  const userInput = this.sequence[index].userInput;
  const correctAnswer = this.sequence[index].answer;
  
  // Check if user input is valid and matches the correct answer
  this.sequence[index].validated = (userInput === correctAnswer);
}

sequence2 = [
  { question: 'Reaches Lungs', answer: 4, userInput: null, validated: undefined },
  { question: 'Carbon dioxide sent back', answer: 6, userInput: null, validated: undefined },
  { question: 'Breath in through nose', answer: 1, userInput: null, validated: undefined },
  { question: 'Air exaled', answer: 8, userInput: null, validated: undefined },
  { question: 'Passess through Trachea ', answer: 3, userInput: null, validated: undefined },
  { question: 'Oxyen Absorbed ', answer: 5, userInput: null, validated: undefined },
  { question: 'Air Inhaled ', answer: 2, userInput: null, validated: undefined },
  { question: 'Breath out of nose', answer: 7, userInput: null, validated: undefined },
  
];

validateSequence2(index: number): void {
  const userInput = this.sequence2[index].userInput;
  const correctAnswer = this.sequence2[index].answer;

  // Check if user input is valid and matches the correct answer
  this.sequence2[index].validated = (userInput === correctAnswer);
}

sequence3 = [
  { question: 'Waste goes throught Urethra', answer: 4, userInput: null, validated: undefined },
  { question: 'Waste reaches the kidneys', answer: 2, userInput: null, validated: undefined },
  { question: 'Filled in urinary bladder', answer: 5, userInput: null, validated: undefined },
  { question: 'Waste filtered', answer: 3, userInput: null, validated: undefined },
  { question: 'Excreted out', answer: 6, userInput: null, validated: undefined },
  { question: 'Energy and nutrients absorbed', answer: 1, userInput: null, validated: undefined },
]

validateSequence3(index: number): void {
  const userInput = this.sequence3[index].userInput;
  const correctAnswer = this.sequence3[index].answer;

  // Check if user input is valid and matches the correct answer
  this.sequence3[index].validated = (userInput === correctAnswer);
}
}

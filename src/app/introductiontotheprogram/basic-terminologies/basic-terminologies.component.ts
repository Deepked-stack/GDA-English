import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudyNavComponent } from '../../study-nav/study-nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-terminologies',
  standalone: true,
  
  templateUrl: './basic-terminologies.component.html',
  styleUrl: './basic-terminologies.component.css',
  imports:[CommonModule,FormsModule]
})

export class BasicTerminologiesComponent {

  @Input() selectedState: 'start' | 'learn' | 'do' | null = null;

  leftItems = [
    { id: 1, text: 'Question 1', correct: false, src: 'src/assets/module1/m1s5_mcqimg1.jpg' },
    { id: 2, text: 'Question 2', correct: false, src: 'src/assets/module1/m1s5_mcqimg2.jpg' },
    { id: 3, text: 'Question 3', correct: false, src: 'assets/module1/m1s5_mcqimg3.jpg' },
    { id: 4, text: 'Question 4', correct: false, src: 'assets/module1/m1s5_mcqimg4.jpg' },
    { id: 5, text: 'Question 5', correct: false, src: 'assets/module1/m1s5_mcqimg5.jpg' },
  ];
  
  
  
  rightItems = [
    { id: 3, text: 'Stethoscope', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Thermometer', correct: false, incorrect: false, matchedWith: null },
    { id: 5, text: 'Hospital', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Sphygmomanometer', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'Pharmacy', correct: false, incorrect: false, matchedWith: null },

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
  mcqFeedback2: { [key: number]: string } = {};

  checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
  cardStatus: { [key: number]: boolean | undefined } = {};

   // Method to update the card status
   checkAnswer(cardId: number, isCorrect: boolean): void {
    this.cardStatus[cardId] = isCorrect;
  }
// -


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
  fillupOPD: 2,
  fillupMaternity: 6,
  fillupPrescription: 8,
  fillupPharmacy: 4,
  fillupOncology: 1,
  fillupLungs: 5,
  fillupAnaesthesia: 3,
  fillupPremature: 7,
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

isnextEnabled:string='false';
  clicked:boolean=false;

  @Output() nextStateChanged = new EventEmitter<boolean>();

  MakeNextEnabled(){
 this.isnextEnabled= 'true';
 this.nextStateChanged.emit(true);
 this.clicked=true;
  }


  @Output() stateChanged =new EventEmitter<string>();
  movetoLearnIt(state:string){
   this.selectedState='learn';
   this.stateChanged.emit(this.selectedState);
 
  }
 
  movetoDoIt(state:string){
   this.selectedState='do';
   this.stateChanged.emit(this.selectedState);
 
  }
 
 
} 
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aseptic-work',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './aseptic-work.component.html',
  styleUrl: './aseptic-work.component.css'
})
export class AsepticWorkComponent {
    @Input() selectedState: 'start' | 'learn' | 'do' | null = null;
  
  answers = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
     };

  feedback: { [key: string]: string | undefined } = {};

  checkAnswer(option: string) {
    const correctAnswers = {
      option1: true,
      option2: true,
      option3: false,
      option4: true,
      option5: true,    
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


  mcqFeedback1: { [key: number]: string } = {};

  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true',
    };

    this.mcqFeedback1[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  mcqFeedback2: { [key: number]: string } = {};

  checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true',
      4: 'true',
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
    };

    this.mcqFeedback3[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
  sequence = [
    { question: 'Dry the bedpan on the rack. This is step number', answer: 4, userInput: null, validated: undefined },
    { question: 'Scrub the bedpan with soap and water. This is step number', answer: 2, userInput: null, validated: undefined },
    { question: 'Clean your hands and put on apron and gloves. This is step number', answer: 1, userInput: null, validated: undefined },
    { question: 'Discard the waste. This is step number', answer: 5, userInput: null, validated: undefined },
    { question: ' Disinfect the bedpan with 0.1% Sodium Hypochlorite. This is step number', answer: 3, userInput: null, validated: undefined },
    { question: 'Wash hands with soap and water. This is step number ', answer: 6, userInput: null, validated: undefined }
  ];

  validatesequence(index: number): void {
    const userInput = this.sequence[index].userInput;
    const correctAnswer = this.sequence[index].answer;
    
    // Check if user input is valid and matches the correct answer
    this.sequence[index].validated = (userInput === correctAnswer);
  }

  sequence2 = [
    { question: 'Wipe the trolley with 70% isopropoyl alcohol. This is step number ', answer: 3, userInput: null, validated: undefined },
    { question: 'Clean the trolley with disposable towel and soap and water. This is step number ', answer: 2, userInput: null, validated: undefined },
    { question: 'Put on disposable gloves. This is step number ', answer: 1, userInput: null, validated: undefined },
    { question: 'Discard the gloves and the waste. This is step number', answer: 4, userInput: null, validated: undefined },
    { question: 'Wash hands with soap and water. This is step number ', answer: 5, userInput: null, validated: undefined },
  ];
  
  validateSequence2(index: number): void {
    const userInput = this.sequence2[index].userInput;
    const correctAnswer = this.sequence2[index].answer;
  
    // Check if user input is valid and matches the correct answer
    this.sequence2[index].validated = (userInput === correctAnswer);
  }
  
  sequence3 = [
    { question: 'Place the stethoscope on a clean surface. This is step number', answer: 4, userInput: null, validated: undefined },
    { question: 'Clean with cotton soaped in 70% alcohol. This is step number', answer: 2, userInput: null, validated: undefined },
    { question: 'Clean the stethoscope with a disposable towel. This is step number', answer: 3, userInput: null, validated: undefined },
    { question: 'Wear gloves. This is step number', answer: 1, userInput: null, validated: undefined },
  ]
  
  validateSequence3(index: number): void {
    const userInput = this.sequence3[index].userInput;
    const correctAnswer = this.sequence3[index].answer;
  
    // Check if user input is valid and matches the correct answer
    this.sequence3[index].validated = (userInput === correctAnswer);
  }
  

}

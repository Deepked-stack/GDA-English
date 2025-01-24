import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudyNavComponent } from '../../study-nav/study-nav.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { Console } from 'console';
// import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-historical-perspective',
  standalone: true,
  
  templateUrl: './historical-perspective.component.html',
  styleUrl: './historical-perspective.component.css',
  imports:[CommonModule]

})
export class HistoricalPerspectiveComponent implements OnInit {
  @Input() selectedState: 1 | 2 | 3 | null =1;

  @Input() userId!: string; // Input property to receive userId

  constructor(private apiservice:ApiService){}
ngOnInit(): void {
  console.log(`Historical Perspective Component loaded with state: ${this.selectedState}`);

}
@Output() stateChanged =new EventEmitter<number>();
@Output() scrollToTop = new EventEmitter<void>();

// -------------------------------FOR TAB SECTION-----------------------------------------------------------
 movetoLearnIt(state:string){
  this.selectedState=2;
  this.stateChanged.emit(this.selectedState);
  this.scrollToTop.emit();

  // this.stateGotFromStudyComponentTabs = 2;
  this.onUpdatetabletolearnit(this.userId);

 }

 onUpdatetabletolearnit(userId: string) {
  this.apiservice.updateSectionToLearnit(userId).subscribe(
    (response) => {
      console.log('Section updated successfully:', response);
    },
    (error) => {
      console.error('Error updating section:', error);
    }
  );
}
movetoDoIt(state: string) {
  // Emit only if state is different from the current state
  if (this.selectedState !== 3) {
    this.selectedState = 3;
    this.stateGotFromStudyComponentTabs = 3;
    this.stateChanged.emit(this.selectedState);
    this.scrollToTop.emit();

    // Proceed with your API call
    this.onUpdatetabletodoit(this.userId);
  }
}

onUpdatetabletodoit(userId: string) {
  this.apiservice.updateSectionToDoit(userId).subscribe(
    (response) => {
      console.log('Section updated successfully:', response);
    },
    (error) => {
      console.error('Error updating section:', error);
    }
  );
}


@Input() stateGotFromStudyComponentTabs:number= 1|2|3;




// ------------------------------------------------------------------------------------------------------------------------------------

 isnextEnabled:string='false';
 clicked:boolean=false;

 @Output() nextStateChanged = new EventEmitter<boolean>();

 MakeNextEnabled(){
this.isnextEnabled= 'true';
this.nextStateChanged.emit(true);
this.clicked=true;

this.updateSubModuleToInitial();
 }

 updateSubModuleToInitial(){
  this.apiservice.setSubModuleNumberToInitial(this.userId).subscribe(
    (response)=>{
      console.log('submodulenumber updated to 1 successfully');
    },
  
    (error)=>{
      console.error('Error updating submoduleno to 1');
      
    }
  )
 }



  @Output() changedstate = new EventEmitter<void>(); 
  
  @Output() sectionComplete = new EventEmitter<void>();  // EventEmitter to notify parent when section is complete

  markSectionComplete() {
    // Emit an event to inform the parent that the section is complete
    this.sectionComplete.emit();
  }
  mcqFeedback1: { [key: number]: string } = {};

  cardStatus: { [key: number]: boolean | undefined } = {};

  // Method to update the card status
  checkAnswer(cardId: number, isCorrect: boolean): void {
    this.cardStatus[cardId] = isCorrect;
  }
// ----------------------------------
  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true'
    };

    this.mcqFeedback1[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
// --------------------------------------------
mcqFeedback2: { [key: number]: string } = {};
  
checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
// --------------------------------------------------------------
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
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }

  leftItems = [
    { id: 1, text: 'Hippocrates', correct: false },
    { id: 2, text: 'Louis Pasteur', correct: false },
    { id: 3, text: 'Ayurveda', correct: false },
    { id: 4, text: 'Neijing Medical Book', correct: false },
    { id: 5, text: 'Florence Nightingale', correct: false },
    { id: 6, text: 'William Harvey', correct: false },
    { id: 7, text: 'Alexander Fleming', correct: false },
    { id: 8, text: 'Edward Jenner', correct: false },
    { id: 9, text: 'Francis Crick, James Watson and Maurice Wilkins', correct: false },
    { id: 10, text: 'Edwin Smith Papyrus', correct: false },
  ];
  
  rightItems = [
    { id: 8, text: 'Vaccines', correct: false, incorrect: false, matchedWith: null },
    { id: 6, text: 'Circulation of Blood', correct: false, incorrect: false, matchedWith: null },
    { id: 7, text: 'Antibiotics', correct: false, incorrect: false, matchedWith: null },
    { id: 5, text: 'Environmental Theory', correct: false, incorrect: false, matchedWith: null },
    { id: 10, text:'Egyptian Surgical Treaties', correct: false, incorrect: false, matchedWith: null },
    { id: 9, text: 'Nobel Prize for DNA Discovery', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'Chinese Ancient Medical Book', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Hippocratic Oath', correct: false, incorrect: false, matchedWith: null },
    { id: 3, text: 'Based on Three Doshas', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'The Germ Theory', correct: false, incorrect: false, matchedWith: null },
  ];
  
  // for match the following
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
  @Output() tabChanged = new EventEmitter<string>(); // Declare the event emitter
  moveToLearnIt() {
    this.tabChanged.emit('learnIt');  // Emit 'learnIt' to StudyComponent
  }
  
}  
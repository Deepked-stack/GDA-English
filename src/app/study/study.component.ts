import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ModuleDataService } from '../module-data.service';


@Component({
  selector: 'app-study',
  standalone: false,
  
  templateUrl: './study.component.html',
  styleUrl: './study.component.css'
})
export class StudyComponent implements OnInit{
  @Input() userId!: string; // Input property to receive userId

selectedSubmodule:string|null =null;
selectedSubmodulecomponent:string|null= null;
selectedSubmoduleState: 'start' | 'learn' | 'do' | null = null; // New state property
submodules: string[] = [];  // Array to hold the list of submodules
currentSubmoduleIndex: number = 0;  // Track the current submodule index
selectedState:string ='start';

constructor(private moduledataser: ModuleDataService){}

ngOnInit(): void {
  
  this.moduledataser.getSubmodule().subscribe((submodule)=>{
    this.selectedSubmodule= submodule;
    // this.selectedSubmodulecomponent= submodule.component;
    this.loadSubmoduleContent(submodule);
  });
}
isNextEnabled:string='false'
learnEnabled = false; // "Learn It" is initially disabled
  doEnabled = false; // "Do It" is initially disabled
// for state change
handleStateChange(state: string) {
  if (this.selectedSubmoduleState !== state) {  // Only update if the state has changed
    this.selectedSubmoduleState = state as 'start' | 'learn' | 'do';
    console.log(`State updated by child to: ${state}`);
    
    if (state === 'learn') {
      this.learnEnabled = true; // Enable "Learn It"
    } else if (state === 'do') {
      this.doEnabled = true; // Enable "Do It"
    }
  }
}


enableLearn() {
  this.learnEnabled = true;
}
// This method will be called when the user clicks on "Start It", "Learn It", or "Do It"
// StudyComponent TS remains the same for the logic of setting selectedSubmoduleState
// startCompleted = false; // Tracks whether "Start It" is completed

setSubmoduleState(state: 'start' | 'learn' | 'do') {
  if (state === 'start') {
    // this.startCompleted = true; // Enable "Learn It" and "Do It"
  }
  this.selectedSubmoduleState = state;
  console.log(`State set to: ${state} for submodule: ${this.selectedSubmodule}`);


}

loadSubmoduleContent(submodule:string| null){
  if(submodule){
    console.log('loaded content for:',submodule);
  }
}


  changeStateToLearn() {
    this.selectedSubmoduleState = 'learn'; // Change state to 'learn' when button is clicked
  }

isNextButtonEnabled ='false';
@Output() nextStateEnabled = new EventEmitter<boolean>();
handleNextButton(isenabled:boolean){
if(isenabled===true){
  this.isNextEnabled='true';
  this.sendyestonext()
}
}

sendyestonext(){
  this.nextStateEnabled.emit(true)
}

}

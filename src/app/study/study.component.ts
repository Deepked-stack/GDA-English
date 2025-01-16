import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from '../module-data.service';

@Component({
  selector: 'app-study',
  standalone: false,
  
  templateUrl: './study.component.html',
  styleUrl: './study.component.css'
})
export class StudyComponent implements OnInit{
selectedSubmodule:string|null =null;
selectedSubmodulecomponent:string|null= null;
selectedSubmoduleState: 'start' | 'learn' | 'do' | null = null; // New state property


constructor(private moduledataser: ModuleDataService){}

ngOnInit(): void {
  
  this.moduledataser.getSubmodule().subscribe((submodule)=>{
    this.selectedSubmodule= submodule;
    // this.selectedSubmodulecomponent= submodule.component;
    this.loadSubmoduleContent(submodule);
  });
}

// This method will be called when the user clicks on "Start It", "Learn It", or "Do It"
// StudyComponent TS remains the same for the logic of setting selectedSubmoduleState
setSubmoduleState(state: 'start' | 'learn' | 'do') {
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
 

}

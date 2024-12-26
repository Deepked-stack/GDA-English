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

constructor(private moduledataser: ModuleDataService){}

ngOnInit(): void {
  
  this.moduledataser.getSubmodule().subscribe((submodule)=>{
    this.selectedSubmodule= submodule;
    // this.selectedSubmodulecomponent= submodule.component;
    this.loadSubmoduleContent(submodule);
  });
}

loadSubmoduleContent(submodule:string| null){
  if(submodule){
    console.log('loaded content for:',submodule);
  }
}

}

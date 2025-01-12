import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModuleDataService } from '../module-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module',
  standalone: false,
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent implements OnInit {
  @Output() moduleSelected = new EventEmitter<string>();  // Emit selected submodule

  modules: { name: string;numberofsubmodules:number ; subModules: string[]}[] = []; // Ensure proper typing
  completionStatus: any[] = [];

  constructor(private moduleDataService: ModuleDataService, private router: Router) {}

  ngOnInit() {
    
    this.moduleDataService.getModules().subscribe((data) => {
      this.modules = data.modules;
      this.moduleDataService.initializeCompletionStatus(data.modules);

    });
this.moduleDataService.getCompletionStatus().subscribe(completionData=>{
  if(completionData){
    this.completionStatus =completionData.modules;
  }
});
  }

markSubmoduleAsDone(moduleIndex:number,submoduleIndex:number){
  this.moduleDataService.markSubmoduleAsCompleted(moduleIndex,submoduleIndex);
}

  toggleSubModules(module: any) {
    module.showSubModules = !module.showSubModules;
  }

  selectSubModule(subModule: string, event: Event) {
    event.stopPropagation();
    console.log('Selected Sub-Module:', subModule);

    this.moduleDataService.setSubmodule(subModule);
    this.moduleSelected.emit(subModule);  // Emit selected submodule to the parent
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  standalone: false,
  
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {
  selectedModuleName: string = 'Select a module to view details';

  displayModuleName(moduleName: string) {
    this.selectedModuleName = moduleName;
}}

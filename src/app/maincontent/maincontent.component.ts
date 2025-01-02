import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincontent',
  standalone: false,
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {
  selectedsubmodule: string = '';  // This is the submodule you want to display
  selectedModuleName: string = 'Select a module to view details';

  constructor(private router: Router) {}

  gotohome() {
    this.router.navigate(['landingpage']);
  }

  displayModuleName(submodule: string) {
    this.selectedsubmodule = submodule;  // This will store the selected submodule
  }

  isModuleVisible = false;

  toggleModuleVisibility() {
    this.isModuleVisible = !this.isModuleVisible;
  }
}

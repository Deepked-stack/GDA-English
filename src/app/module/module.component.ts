import { Component, HostListener, OnInit } from '@angular/core';
import { ModuleDataService } from '../module-data.service';
import { Router } from '@angular/router';
// import {} from '../'
@Component({
  selector: 'app-module',
  standalone: false,
  
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent implements OnInit {

  modules: { name: string; subModules: string[] }[] = []; // Ensure proper typing

  isSmallScreen: boolean = false;  // Flag to check small screen size
  isMenuOpen: boolean = false;     // Flag to toggle menu visibility

  constructor(private moduleDataService: ModuleDataService,private router:Router) {}

  ngOnInit() {
    this.moduleDataService.getModules().subscribe((data) => {
      this.modules = data.modules;
    });
    // this.checkScreenSize();
  }

  toggleSubModules(module: any) {
    module.showSubModules = !module.showSubModules;
  }

  selectSubModule(subModule: string, event: Event) {
    event.stopPropagation();
    console.log('Selected Sub-Module:', subModule);
    // this..setSubmodule(submodule); // Update the service with the selected submodule
    this.moduleDataService.setSubmodule(subModule);
    // this.router.navigate(['study'])
    

  }

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;  // Toggle the menu
  // }

  // @HostListener('window:resize')
  // checkScreenSize() {
  //   this.isSmallScreen = window.innerWidth <= 768;
  //   if (!this.isSmallScreen) {
  //     this.isMenuOpen = false;  // Hide menu on larger screens
  //   }
  // }
}

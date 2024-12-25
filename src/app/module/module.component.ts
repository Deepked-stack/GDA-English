import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from '../module-data.service';

@Component({
  selector: 'app-module',
  standalone: false,
  
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent implements OnInit {

  modules: { name: string; subModules: string[] }[] = []; // Ensure proper typing

  constructor(private moduleDataService: ModuleDataService) {}

  ngOnInit() {
    this.moduleDataService.getModules().subscribe(data => {
      this.modules = data.modules; // Access the 'modules' property of the JSON response
    });
  }

  toggleSubModules(module: any) {
    module.showSubModules = !module.showSubModules; // Toggle visibility
  }
}

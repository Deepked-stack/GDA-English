import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincontentnav',
  standalone: false,
  
  templateUrl: './maincontentnav.component.html',
  styleUrl: './maincontentnav.component.css'
})
export class MaincontentnavComponent {
constructor(private router:Router){}
gotohome(){
this.router.navigate(['landingpage'])
}
isModuleVisible = false;

menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
  this.isModuleVisible = !this.isModuleVisible;

}

}

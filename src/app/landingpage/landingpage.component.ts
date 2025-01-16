import { Component } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent  {
constructor(private router:Router){}
gotomain(){
this.router.navigate(['main'])
}



}

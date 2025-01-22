import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'], // Correct styleUrls property
})
export class LandingpageComponent implements OnInit, AfterViewInit, OnDestroy {
  userId: string | null = null;
  private intervalId: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  ngAfterViewInit(): void {
    // Start the interval after 3 seconds
    this.intervalId = setInterval(() => {
      const nextButton = document.querySelector(
        '.carousel-control-next'
      ) as HTMLButtonElement;
      if (nextButton) {
        nextButton.click(); // Simulate the button click
      }
    }, 3500); // Repeat every 3 seconds
  }

  ngOnDestroy(): void {
    // Clear the interval to avoid memory leaks when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  gotomain(): void {
    if (this.userId) {
      this.router.navigate(['/main', this.userId]);
    } else {
      this.router.navigate(['main']) 
   }
  }
}

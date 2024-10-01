import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isImprintPage = false;
  isPolicyPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Route überwachen
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isImprintPage = event.urlAfterRedirects.includes('/imprint');
      }
      if (event instanceof NavigationEnd) {
        this.isPolicyPage = event.urlAfterRedirects.includes('/policy');
      }
    });
  }
}


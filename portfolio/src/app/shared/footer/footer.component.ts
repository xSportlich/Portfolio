import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import von CommonModule
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,  // Wenn es eine Standalone-Komponente ist
  imports: [CommonModule],  // CommonModule importieren, um ngClass zu nutzen
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isImprintPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Route überwachen
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isImprintPage = event.urlAfterRedirects.includes('/imprint');
      }
    });
  }
}

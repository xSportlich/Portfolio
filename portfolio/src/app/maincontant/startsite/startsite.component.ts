import { Component, AfterViewInit } from '@angular/core';
import { MaincontantComponent } from '../maincontant.component';

@Component({
  selector: 'app-startsite',
  standalone: true,
  imports: [
    MaincontantComponent
  ],
  templateUrl: './startsite.component.html',
  styleUrl: './startsite.component.scss'
})
export class StartsiteComponent implements AfterViewInit{
  constructor() {}

  ngAfterViewInit() {
    this.animationx(); // Call the function here after the view is initialized
  }

  animationx() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('show');
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}

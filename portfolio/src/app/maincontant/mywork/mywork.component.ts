import { Component, AfterViewInit } from '@angular/core';
import { ProjectcontantComponent } from './projectcontant/projectcontant.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [
    ProjectcontantComponent,
    CommonModule
  ],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})
export class MyworkComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    this.animationx(); // Call the function here after the view is initialized
  }

  animationx() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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

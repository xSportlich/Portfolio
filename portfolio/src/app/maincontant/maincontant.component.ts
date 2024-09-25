import { Component } from '@angular/core';
import { StartsiteComponent } from './startsite/startsite.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WhyMeSiteComponent } from './why-me-site/why-me-site.component';

@Component({
  selector: 'app-maincontant',
  standalone: true,
  imports: [
    StartsiteComponent,
    RouterOutlet,
    CommonModule,
    WhyMeSiteComponent
  ],
  templateUrl: './maincontant.component.html',
  styleUrl: './maincontant.component.scss'
})
export class MaincontantComponent{

}

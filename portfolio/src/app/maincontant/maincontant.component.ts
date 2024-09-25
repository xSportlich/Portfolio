import { Component } from '@angular/core';
import { StartsiteComponent } from './startsite/startsite.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WhyMeSiteComponent } from './why-me-site/why-me-site.component';
import { MyskilsComponent } from './myskils/myskils.component';
import { MyworkComponent } from './mywork/mywork.component';

@Component({
  selector: 'app-maincontant',
  standalone: true,
  imports: [
    StartsiteComponent,
    RouterOutlet,
    CommonModule,
    WhyMeSiteComponent,
    MyskilsComponent,
    MyworkComponent
  ],
  templateUrl: './maincontant.component.html',
  styleUrl: './maincontant.component.scss'
})
export class MaincontantComponent{

}

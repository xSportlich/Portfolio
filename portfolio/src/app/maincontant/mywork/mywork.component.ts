import { Component } from '@angular/core';
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
export class MyworkComponent {

}

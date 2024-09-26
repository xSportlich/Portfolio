import { Component } from '@angular/core';

@Component({
  selector: 'app-projectcontant',
  standalone: true,
  imports: [],
  templateUrl: './projectcontant.component.html',
  styleUrl: './projectcontant.component.scss'
})
export class ProjectcontantComponent {

  projects = [
    {
      number: 1,
      name: 'Join',
      aboutTheProject: 'Taks manager inspired by the Kanban System. Create and Organize tasks using drag and drop functions, assign users and categories.',
      TechnologiesIHaveUsed: 'Javascript, HTML, CSS, Firebase',
      WhatIHaveLearned: 'OR my group-projectts experience pretium ddddd ddddddddddddddddd sdfgfs gs wgsgw gweg w gw ethterhrh rt hrth rth rth trh ',
      img: '../../../../assets/img/Property 1=Jon Hover.png',
    },
    {
      number: 2,
      name: 'Mafia 5',
      aboutTheProject: 'Mafia 5 is a Jump, Run and shoot Game. Help Fernando find and eliminate criminal San Davis.',
      TechnologiesIHaveUsed: 'Javascript, HTML, CSS',
      WhatIHaveLearned: 'In Mafia 5 was the focus in the Object-oriented Programming',
      img: '../../../../assets/img/mafia.png'
    },
  ];
}
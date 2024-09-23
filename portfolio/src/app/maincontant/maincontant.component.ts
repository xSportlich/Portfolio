import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-maincontant',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './maincontant.component.html',
  styleUrl: './maincontant.component.scss'
})
export class MaincontantComponent{

}

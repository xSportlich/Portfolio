import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaincontantComponent } from './maincontant/maincontant.component';
import { delay } from 'rxjs';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaincontantComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  ngAfterViewInit(): void {
    const bodyElement = document.getElementById("scroll");

    if (bodyElement) {
      bodyElement.addEventListener("wheel", function (e: WheelEvent) {
        if (e.deltaY > 0) {  
          bodyElement.scrollLeft  += 100;
        } else {
          bodyElement.scrollLeft  -= 100;
        }
      }, { passive: false });
    }
  }
}

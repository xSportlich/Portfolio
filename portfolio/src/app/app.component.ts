import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaincontantComponent } from './maincontant/maincontant.component';
import { delay } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { StartsiteComponent } from './maincontant/startsite/startsite.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MaincontantComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';


  ngAfterViewInit(): void {
    const bodyElement = document.getElementById("scroll");
    let isScrolling: boolean | number = false; // Variable zur Steuerung der Scroll-Animation

    if (bodyElement) {
      bodyElement.addEventListener("wheel", function (e: WheelEvent) {
        // Verhindert mehrfaches Scrollen während einer laufenden Animation
        if (isScrolling) {
          return;
        }

        isScrolling = true;

        if (e.deltaY > 0) {
          bodyElement.scrollBy({ left: 520, behavior: 'smooth' });
        } else {
          bodyElement.scrollBy({ left: -520, behavior: 'smooth' });
        }

        // Setze isScrolling nach 500ms wieder auf false (nachdem die Animation abgeschlossen ist)
        setTimeout(() => {
          isScrolling = false;
        }, 200);  // Dauer, die zur Vermeidung von Ruckeln reicht
      }, { passive: false });
    }
  }

}

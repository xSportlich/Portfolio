import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component'; // FooterComponent importieren

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent],  // FooterComponent hier hinzufügen
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss', '../shared/footer/footer.component.scss']
})
export class ImprintComponent {
  constructor() {}
}

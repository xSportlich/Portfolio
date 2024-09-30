import { Routes } from '@angular/router';
import { MaincontantComponent } from './maincontant/maincontant.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MaincontantComponent },
    { path: 'imprint', component: ImprintComponent },
  
];

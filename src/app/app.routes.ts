import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyWorkPageComponent } from './components/my-work-page/my-work-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'work', component: MyWorkPageComponent },
];

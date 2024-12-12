import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { ProjectDetailsComponent } from './views/project-details/project-details.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent,
  },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectDetailsComponent } from './views/project-details/project-details.component';
import { CreateProjectComponent } from './views/create-project/create-project.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'project/create',
    component: CreateProjectComponent,
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent,
  },
];

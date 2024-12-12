import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project } from '../../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  http = inject(HttpClient);
  getProjects = () => {
    return this.http.get<Project[]>('/api/project');
  };
  getProjectById = (id: string) => {
    return this.http.get<Project>('/api/project/' + id);
  };
}

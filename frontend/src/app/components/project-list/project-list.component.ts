import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProjectService } from '../../service/project/project.service';
import { Project } from '../../interfaces/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
  projects!: Project[];
  ngOnInit(): void {
    this.projects$.subscribe((data) => (this.projects = data));
  }
}

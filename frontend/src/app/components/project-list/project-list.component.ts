import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Project } from '../../interfaces/project';
import { RouterLink } from '@angular/router';
import { ProjectTagsListComponent } from "../project-tags-list/project-tags-list.component";
import { ProjectService } from '../../services/project/project.service'

@Component({
  selector: 'app-project-list',
  imports: [NgOptimizedImage, RouterLink, ProjectTagsListComponent],
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

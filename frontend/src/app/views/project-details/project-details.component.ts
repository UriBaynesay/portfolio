import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../service/project/project.service';
import { Project } from '../../interfaces/project';
import { NgOptimizedImage } from '@angular/common';
import { ProjectTagsListComponent } from "../../components/project-tags-list/project-tags-list.component";


@Component({
  selector: 'app-project-details',
  imports: [NgOptimizedImage, ProjectTagsListComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent implements OnInit {
  projectService = inject(ProjectService);
  routeService = inject(ActivatedRoute);
  project$ = this.projectService.getProjectById(
    this.routeService.snapshot.params['id']
  );
  project!: Project;

  ngOnInit(): void {
    this.project$.subscribe((data) => (this.project = data));
  }
}

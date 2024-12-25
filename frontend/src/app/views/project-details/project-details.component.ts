import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../interfaces/project';
import { ProjectService } from '../../services/project/project.service';
import { ProjectDetailsPreviewComponent } from '../../components/project-details-preview/project-details-preview.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-project-details',
  imports: [ProjectDetailsPreviewComponent, MatProgressSpinner],
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

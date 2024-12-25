import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project'
import { ProjectTagsListComponent } from "../project-tags-list/project-tags-list.component";
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-project-details-preview',
  imports: [ProjectTagsListComponent, NgOptimizedImage],
  templateUrl: './project-details-preview.component.html',
  styleUrl: './project-details-preview.component.scss'
})
export class ProjectDetailsPreviewComponent {
  @Input() project!:Project
}

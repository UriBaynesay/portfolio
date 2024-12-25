import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tags-list',
  imports: [],
  templateUrl: './project-tags-list.component.html',
  styleUrl: './project-tags-list.component.scss',
})
export class ProjectTagsListComponent {
  @Input() tags!:string[]
}

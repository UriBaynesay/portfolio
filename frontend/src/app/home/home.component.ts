import { Component } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component'
import { HeroComponent } from '../hero/hero.component'

@Component({
  selector: 'app-home',
  imports: [ProjectListComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

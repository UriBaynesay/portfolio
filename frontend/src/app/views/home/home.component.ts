import { Component } from '@angular/core';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [ProjectListComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

import { Component } from '@angular/core';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-home',
  imports: [ProjectListComponent, HeroComponent, MatProgressSpinner],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

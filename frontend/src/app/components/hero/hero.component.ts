import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  stack = [
    { name: 'NextJS', color: 'black' },
    { name: 'React', color: 'blue-500' },
    { name: 'Node', color: 'green-700' },
    { name: 'ExpressJS', color: 'black' },
    { name: 'MongoDB', color: 'green-500' },
    { name: 'PostgreSQL', color: 'blue-700' },
  ];
}

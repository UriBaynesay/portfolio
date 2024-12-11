import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navLinks = [
    { path: '', text: 'Home' },
    { path: '#project-list', text: 'Projects' },
    { path: '#contact', text: 'Contact' },
  ];
}

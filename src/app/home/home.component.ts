import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  stats = [
    { value: '8+', label: 'Years', detail: 'Experience' },
    { value: '3', label: 'MNCs', detail: '' },
    { value: '6+', label: 'Domains', detail: '' },
  ];

  actions = {
    primary: 'View My Experience',
    secondary: 'Download Resume',
  };
}

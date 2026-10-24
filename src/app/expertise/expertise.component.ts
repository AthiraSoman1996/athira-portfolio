import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  imports: [],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
})
export class ExpertiseComponent {
  expertiseItems = [
    {
      title: 'Angular',
      icon: 'angular',
      description: 'Enterprise applications, modern Angular development.',
    },
    {
      title: 'Micro Frontends',
      icon: 'layers',
      description: 'Modular architecture and scalable solutions.',
    },
    {
      title: 'State Management',
      icon: 'database',
      description: 'NgRx, RxJS and reactive patterns.',
    },
    {
      title: 'AG Grid',
      icon: 'grid_view',
      description: 'Advanced data grids and customization.',
    },
    {
      title: 'UI Engineering',
      icon: 'palette',
      description: 'Angular Material, CDK, Bootstrap and responsive design.',
    },
    {
      title: 'Testing',
      icon: 'verified',
      description: 'Unit testing, E2E testing and quality-focused development.',
    },
  ];

  technologyStack = [
    'Angular',
    'Angular Ionic',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'NgRx',
    'AG Grid',
    'Material',
    'Bootstrap',
    'CDK',
    'REST APIs',
    'GraphQL',
    'Git',
    'TortoiseSVN',
    'Swagger',
    'Postman',
    'SonarQube',
    'Jira',
  ];
}

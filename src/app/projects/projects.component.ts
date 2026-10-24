import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Banking Platform',
      icon: 'account_balance',
      description: 'Enterprise web application supporting data-driven workflows.',
      technologies: ['Angular', 'Micro frontend', 'NgRx' , 'Material' , 'Monorepo' ]
    },
        {
      title: 'Power',
      icon: 'power',
      description: 'Real-time Angular application for managing live data with seamless online/offline data handling, synchronization, and reliable user interactions in real-time systems.',
      technologies: ['Angular',  'NgRx' , 'AG Grid']
    },
    {
      title: 'Healthcare Application',
      icon: 'cardiology',
      description: 'Web application for healthcare workflows and data management.',
      technologies: ['Angular', 'Material', 'Angular Ionic', 'ReactJS']
    },
    {
      title: 'Insurance Platform',
      icon: 'shield',
      description: 'User-focused application with reusable components.',
      technologies: ['Angular', 'TypeScript']
    },
    {
      title: 'Analytics Application',
      icon: 'bar_chart',
      description: 'Scalable frontend solution for enterprise analytics.',
      technologies: ['Angular', 'Material', 'CDK']
    }
  ];

}

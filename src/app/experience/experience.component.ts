import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'TCS',
      role: 'IT Analyst',
      duration: 'May 2023 – Present',
      logo: 'assets/images/TCS-LOGO.png',
      description:
        'Working on enterprise Angular applications across banking and analytics domains.',
    },
    {
      company: 'Quest Global',
      role: 'Senior Software Engineer',
      duration: 'Nov 2021 – Apr 2023',
      logo: 'assets/images/QUEST-LOGO.png',
      description:
        'Developed enterprise Angular applications and advanced data-grid solutions.',
    },
    {
      company: 'UST',
      role: 'Developer',
      duration: 'Apr 2018 – Nov 2021',
      logo: 'assets/images/UST-LOGO.png',
      description:
        'Developed responsive web applications and integrated REST APIs.',
    },
  ];

  domains = [
    {
      name: 'Banking',
      icon: 'account_balance',
    },
    {
      name: 'Healthcare',
      icon: 'cardiology',
    },
    {
      name: 'Insurance',
      icon: 'shield',
    },
    {
      name: 'Power',
      icon: 'bolt',
    },
    {
      name: 'Analytics',
      icon: 'bar_chart',
    },
    {
      name: 'Enterprise Applications',
      icon: 'apps',
    },
  ];
}

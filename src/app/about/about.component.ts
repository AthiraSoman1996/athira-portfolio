import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  paragraphs = [
    'I am a Front-End Developer specializing in Angular, with 8+ years of experience developing enterprise web applications across multiple domains.',
    'I enjoy solving complex UI challenges, building reusable components and creating scalable, user-friendly applications.',
  ];

  quote =
    'Passionate about creating meaningful digital experiences through clean and efficient code.';
}

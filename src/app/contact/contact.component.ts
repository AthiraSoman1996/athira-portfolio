import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  development = {
    eyebrow: 'CONTINUOUS DEVELOPMENT',
    title: 'Expanding Beyond Angular',
    description: 'Alongside my core Angular expertise, I have completed training and workshops in React.js and Node.js as part of my goal of expanding toward full-stack engineering.',
    topics: ['React.js', 'Node.js', 'API Development']
  };

  contact = {
    eyebrow: "LET'S CONNECT",
    title: "Let's build something meaningful together.",
    description: 'Open to Angular and Front-End opportunities across Dubai and the GCC.',
    email: 'mailto:athiravsoman12@gmail.com',
    linkedin: 'https://www.linkedin.com/in/athira-soman-58370713b',
    github: 'https://github.com/AthiraSoman1996'
  };

}

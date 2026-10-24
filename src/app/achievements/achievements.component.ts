import { Component } from '@angular/core';

@Component({
    selector: 'app-achievements',
    imports: [],
    templateUrl: './achievements.component.html',
    styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {

    achievements = [
        {
            title: 'On-the-Spot Award',
            icon: 'emoji_events',
            organization: 'TCS',
            description: 'Recognized three times for timely delivery and performance.'
        },
        {
            title: 'Hackathon Winner',
            icon: 'star',
            organization: 'TCS',
            description: 'Won an Angular hackathon challenge by designing and delivering an innovative, scalable solution within the competition timeframe.'
        },
        {
            title: 'On-the-Fly Award',
            icon: 'military_tech',
            organization: 'Quest Global',
            description: 'Recognized for outstanding performance and contributions to projects.'
        },
        {
            title: 'U-STAR Recognition',
            icon: 'workspace_premium',
            organization: 'UST',
            description: 'Received for exceptional service and dedication.'
        }
    ];

}

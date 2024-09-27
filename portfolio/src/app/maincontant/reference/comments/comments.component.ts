import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
comments = [
{
  text: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
  name: 'Rugman',
  project: 'Project Join',
},
{
  text: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
  name: 'Rugman',
  project: 'Project Join',
},
{
  text: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
  name: 'Rugman',
  project: 'Project Join',
},

];
}

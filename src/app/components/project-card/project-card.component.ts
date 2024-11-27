import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() title!: string;
  @Input() clientName!: string;
  @Input() workNameOne!: string;
  @Input() workNameTwo!: string;
  @Input() image!: string;






}

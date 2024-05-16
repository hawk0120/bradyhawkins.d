import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from '../../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FontAwesomeModule, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

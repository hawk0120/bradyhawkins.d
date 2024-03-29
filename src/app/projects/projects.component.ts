import { Component} from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './projects.service';
import {NgFor} from '@angular/common';
@Component({
  standalone: true,
				selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
imports: [NgFor]
})
export class ProjectsComponent {
  project: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
				this.project = projects;
		});
  }

}


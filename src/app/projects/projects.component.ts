import { Component, Input } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './projects.service';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [NgFor],
})



export class ProjectsComponent {
  @Input() numOfProjectToShow: number = 8;

  project: Project[] = [];


  constructor(private projectService: ProjectService) {}

  ngOnInit() {

    this.projectService.getProjects().subscribe((projects) => {
      this.project = projects.slice(0, this.numOfProjectToShow);
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Observable<Project[]> {
    
  const projects: Project[] = [
      { name: 'Clammy', description: 'The project is a typescript-based Insurance Claim Management Platform, powered by Express.js, Angular, and PostgreSQL. The user can create, resolve and retrieve insurance claims through an RESTful API endpoints.', url: 'https://github.com/hawk0120/clammy'},

	  { name: 'Harambe', description: 'A CLI too to set up Garmin Monkey-C applications. The project was inspired by my love for running and create-react-app', url: 'https://github.com/hawk0120/Harambe' },
	  { name: 'Cooking With Andrea Application', description: 'A cross platform recipe application using React Native. Uses backend RESTful API using Node.js, Express, and MongoDB to shuttle recipes to a React Native front end', url: '' },
      { name: 'Personal portfolio site', description: 'Used Angular to create persoanl website that dynamically render markdown files in blog posts', url: 'https://www.bradyhawkins.dev'}, 
  ];

    return of(projects);
  }
}


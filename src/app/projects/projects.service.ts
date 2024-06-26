import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        name: 'Clammy',
        description:
          'The project is a Insurance Claim Management Platform, powered by Angular on the front end. I have written the backend server in Java/Spring and Typescript/Express to compare verbosity. The server interacts with a PostgreSQL database. The user can create, resolve and retrieve insurance claims through an RESTful API endpoints.',
        url: 'https://github.com/hawk0120/clammy',
      },

{
  name: "Weapy App",
  description: "Developed a mobile application that tracks and displays real-time pollen levels for trees, grass, weeds, and mold based on the user's current location. Used React Native, @rneui/themed for custom theming, and react-native-elements for UI components. Features include automatic location-based updates, a manual location reset modal, and animated indicators for pollen severity.",
  url: "https://www.bradyhawkins.dev/blog/build-weepy-app"
},

        {
        name: 'Cooking With Andrea Application',
        description:
          'A cross platform recipe application using React Native. Uses backend RESTful API using Node.js, Express, and MongoDB to shuttle recipes to a React Native front end',
        url: '',
      },
      {
        name: 'bowmaneconomics.ca',
        description:
          'A static website written in vanilla javascript, html, and css. The client wanted a stripped down UI to market their services.',
        url: 'https://www.bowmaneconomics.ca',
      },

      {
        name: "Customer Portal for Scotty's Auto",
        description:
          "A standalone single-page application developed with React and TypeScript, providing customers with a dedicated portal for interacting with Scotty's Auto services. It features a contact form utilizing Formspree for seamless communication with the company.",
        url: 'https://www.scottysauto.ca',
      },

      {
        name: 'Flappy Niks Game',
        description:
          'Created an interactive Flappy Bird inspired game using HTML5 Canvas, Angular, and Typescript. This was developed as a fun gift for my nephews in Canada.',
        url: 'https://www.bradyhawkins.dev/game-canvas',
      },


      {
        name: 'Personal portfolio site',
        description:
          'Used Angular to create persoanl website that dynamically render markdown files in blog posts',
        url: 'https://www.bradyhawkins.dev',
      },
      {
        name: 'Harambe',
        description:
          'A CLI too to set up Garmin Monkey-C applications. The project was inspired by my love for running and create-react-app',
        url: 'https://github.com/hawk0120/Harambe',
      },

      {
        name: 'Counter React Native Application',
        description:
          'A simple React Native application developed to track the number of people entering a building. This project was initiated during the Covid-19 pandemic to aid clients in managing and monitoring occupancy levels effectively.',
        url: 'https://github.com/hawk0120/counter',
      },

      {
        name: 'compassionatekenora.ca',
        description:
          'A wordpress multipage application that to brought awareness to the grassroots organization. Lead the designed and implementation.',
        url: 'https://www.compassionatekenora.ca',
      },
    ];

    return of(projects);
  }
}

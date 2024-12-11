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
          'The project is a Insurance Claim Management Platform, powered by Angular on the front end. I wrote the REST Service in Java/Spring and Typescript/Express as an experiment in verbosity. The user can create, resolve and retrieve insurance claims.',
        url: 'https://github.com/hawk0120/clammy',
      },

        {
          name: "debby",
          description: "debby is file based database system. I enjoy the speed and ease of sqlLite, but found myself wanting something even simpler so I built a database system that stores data in a file. It has read, write, and update commands. It loads the entire database into memory when the read command is called. Its a simple solution for small projects.",
          url: "https://www.bradyhawkins.dev/blog/bld-debby"
        },

        {
          name: "Weapy",
          description: "Developed a mobile application that tracks and displays real-time pollen levels for trees, grass, weeds, and mold based on the user's current location. Used React Native, @rneui/themed for custom theming, and react-native-elements for UI components. Features include automatic location-based updates, a manual location reset modal, and animated indicators for pollen severity.",
          url: "https://www.bradyhawkins.dev/blog/bld-weepy"
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
        name: "ScottyAuto.ca",
        description:
          "A standalone single-page application developed with React and TypeScript, providing customers with a dedicated portal for interacting with Scotty's Auto services. It features a contact form utilizing Formspree for seamless communication with the company.",
        url: 'https://www.scottysauto.ca',
      },

//      {
//        name: 'Flappy Niks Game',
//        description:
//          'Created an interactive Flappy Bird inspired game using HTML5 Canvas, Angular, and Typescript. This was developed as a fun gift for my nephews in Canada.',
//        url: 'https://www.bradyhawkins.dev/game-canvas',
//      },


      {
        name: 'Personal portfolio site',
        description:
          'Used Angular to create persoanl website that dynamically render markdown files in blog posts',
        url: 'https://www.bradyhawkins.dev',
      },

//      {
//        name: 'Harambe',
//        description:
//          'A CLI too to set up Garmin Monkey-C applications. The project was inspired by my love for running and create-react-app',
//        url: 'https://github.com/hawk0120/Harambe',
//      },

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

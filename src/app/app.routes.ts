import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './common/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
		
  { path: 'blog', 
		loadChildren: () =>
		import('./blog/blog.module').then(m => m.BlogModule),
  },
  { path: 'projects', component: ProjectsComponent },
];

export { routes }; // Export the routes variable

// Optionally, you can also export individual components if needed
export { AppComponent, BlogComponent, ProjectsComponent };


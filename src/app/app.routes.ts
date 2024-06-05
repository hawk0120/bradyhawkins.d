import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './common/home/home.component';
import {GameCanvasComponent} from './game-canvas/game-canvas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'blog',
		loadChildren: () =>
		import('./blog/blog.module').then(m => m.BlogModule),
  },
  { path: 'projects', component: ProjectsComponent },

  { path: 'game-canvas', component: GameCanvasComponent},

];

export { routes }; // Export the routes variable

export { AppComponent, BlogComponent, ProjectsComponent };


import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavBarComponent,
				FooterComponent, 
				RouterOutlet, 
				RouterLink, 
				RouterLinkActive],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
		title="Brady Hawkins app";

}


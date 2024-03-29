import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent implements OnInit {

  post$: Observable<string> | undefined;  

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
		this.post$ = this.route.params.pipe(	
				      map((params) => `/assets/${params['id']}/${params['id']}.md`)
		);
  }
}



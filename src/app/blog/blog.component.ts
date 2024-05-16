import { Component, Input } from '@angular/core';
import { entries, Post } from './entries';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent implements OnInit{
  @Input() numOfBlogsToShow: number=3;

  entries: Post[] = entries;

  constructor() {}

  // create a 'slug', which will be the url to the post
  slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }

  ngOnInit(): void {
    this.entries = this.entries.map((entry) => ({
      ...entry,
      slug: this.slugify(entry.title),
    }));

	}
}



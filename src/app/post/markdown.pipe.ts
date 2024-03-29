// markdown.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Pipe({
  name: 'safeMarkdown'
})
export class SafeMarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const sanitizedHtml = marked.parse(value);
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml.toString());
  }
}


import { Component } from '@angular/core';
import { ExamplesComponent } from './components/examples/examples.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExamplesComponent],
  template: `
    <app-examples></app-examples>
  `
})
export class AppComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div class="examples-container">
      <div class="examples-grid">
        <app-card></app-card>
      </div>
    </div>
  `,
  styles: [`
    .examples-container {
      padding: 24px;
      background-color: var(--md-sys-color-background);
      min-height: 100vh;
    }

    .examples-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class ExamplesComponent {}

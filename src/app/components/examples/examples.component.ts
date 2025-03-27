import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="examples-container">
      <div class="examples-grid">
        <!-- Aquí irán los ejemplos de la página -->
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

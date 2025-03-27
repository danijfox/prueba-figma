import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  template: `
    <div class="container">
      <app-card></app-card>
    </div>
  `,
  styles: [`
    .container {
      padding: 24px;
      min-height: 100vh;
      background-color: var(--md-sys-color-background, #f5f5f5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class AppComponent {}

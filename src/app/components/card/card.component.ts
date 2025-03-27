import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/elevation/elevation.js';

@Component({
  selector: 'app-card',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="card">
      <md-elevation></md-elevation>
      <h2 class="card-title">{{ title }}</h2>
      <div class="card-actions">
        <md-filled-button>Aceptar</md-filled-button>
        <md-outlined-button>Cancelar</md-outlined-button>
      </div>
    </div>
  `,
  styles: [`
    .card {
      position: relative;
      background: var(--md-sys-color-surface, #fff);
      border-radius: 16px;
      padding: 24px;
      width: 320px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 24px auto;
    }

    md-elevation {
      --md-elevation-level: 2;
    }

    .card-title {
      font-family: var(--md-sys-typescale-headline-small-font, Roboto);
      font-size: var(--md-sys-typescale-headline-small-size, 20px);
      font-weight: var(--md-sys-typescale-headline-small-weight, 600);
      line-height: var(--md-sys-typescale-headline-small-line-height, 1.5);
      margin: 0;
      color: var(--md-sys-color-on-surface, #1f1f1f);
    }

    .card-actions {
      display: flex;
      gap: 12px;
    }

    md-filled-button,
    md-outlined-button {
      --md-filled-button-container-shape: 20px;
      --md-outlined-button-container-shape: 20px;
      min-width: 100px;
    }
  `]
})
export class CardComponent {
  @Input() title: string = 'hola desde Cursor';
}

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
        <md-filled-button (click)="onAccept.emit()">Aceptar</md-filled-button>
        <md-outlined-button (click)="onCancel.emit()">Cancelar</md-outlined-button>
      </div>
    </div>
  `,
  styles: [`
    .card {
      position: relative;
      background: var(--md-sys-color-surface);
      border-radius: 16px;
      padding: 24px;
      width: 320px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    md-elevation {
      --md-elevation-level: 2;
    }

    .card-title {
      font-family: var(--md-sys-typescale-headline-small-font);
      font-size: var(--md-sys-typescale-headline-small-size);
      font-weight: var(--md-sys-typescale-headline-small-weight);
      line-height: var(--md-sys-typescale-headline-small-line-height);
      margin: 0;
      color: var(--md-sys-color-on-surface);
    }

    .card-actions {
      display: flex;
      gap: 12px;
    }
  `]
})
export class CardComponent {
  @Input() title: string = 'hola desde Cursor';
}

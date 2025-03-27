import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <h2 class="card-title">{{ title }}</h2>
      <div class="card-actions">
        <button class="btn btn-primary" (click)="onAccept.emit()">Aceptar</button>
        <button class="btn btn-secondary" (click)="onCancel.emit()">Cancelar</button>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: white;
      border: 1px solid rgba(242, 242, 242);
      border-radius: 8px;
      padding: 24px;
      width: 320px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .card-title {
      font-size: 20px;
      font-weight: 600;
      color: rgba(38, 38, 38);
      margin: 0;
    }

    .card-actions {
      display: flex;
      gap: 12px;
    }

    .btn {
      padding: 8px 24px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      height: 36px;
      min-width: 120px;
    }

    .btn-primary {
      background: #1976D2;
      color: white;
      border: none;
    }

    .btn-secondary {
      background: white;
      color: #1976D2;
      border: 1px solid #1976D2;
    }
  `]
})
export class CardComponent {
  @Input() title: string = 'hola desde Cursor';
}

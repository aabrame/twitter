import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent<T> {

  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR' = 'IDLE';
  @Input() action?: () => Observable<T>;
  @Output() success: EventEmitter<T> = new EventEmitter<T>();
  @Output() error: EventEmitter<any> = new EventEmitter<any>();

  onClick() {
    if (this.action) {
      this.status = 'LOADING';
      this.action().subscribe({
        next: val => {
          this.status = 'SUCCESS';
          this.success.emit(val);
        },
        error: err => {
          this.status = 'ERROR';
          this.error.emit(err);
        }
      });
    }
  }

}

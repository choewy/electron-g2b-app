import { v4 } from 'uuid';
import { AlertStoreProps } from './alert.store';

export class AlertEvent extends CustomEvent<AlertStoreProps> {
  constructor(detail: AlertStoreProps) {
    detail.id = v4();

    super(AlertEvent.name, { detail });
  }

  static of() {
    return new AlertEvent({ variant: 'default', message: '' });
  }

  static info(message: string) {
    return new AlertEvent({ variant: 'info', message });
  }

  static success(message: string) {
    return new AlertEvent({ variant: 'success', message });
  }

  static warning(message: string) {
    return new AlertEvent({ variant: 'warning', message });
  }

  static error(message: string) {
    return new AlertEvent({ variant: 'error', message });
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}

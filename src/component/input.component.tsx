import { ReactElement } from 'react';
import { InputProps } from './types';

export class InputComponentClass {
  Radio({ labelText, ...props }: InputProps): ReactElement {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {labelText && <label htmlFor={props.id}>{labelText}</label>}
        <input type="radio" {...props} />
      </div>
    );
  }

  Check({ labelText, ...props }: InputProps): ReactElement {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {labelText && <label htmlFor={props.id}>{labelText}</label>}
        <input type="checkbox" {...props} />
      </div>
    );
  }

  Text({ labelText, ...props }: InputProps): ReactElement {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {labelText && <label htmlFor={props.id}>{labelText}</label>}
        <input type="text" {...props} />
      </div>
    );
  }
}

export const InputComponent = new InputComponentClass();

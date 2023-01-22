import { CSSProperties, ReactElement } from 'react';
import { FormProps } from './types';

export class FormComponentClass {
  Search({ children, style, ...props }: FormProps): ReactElement {
    const defaultStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <form
        style={style ? Object.assign(defaultStyle, style) : defaultStyle}
        {...props}
      >
        {children}
      </form>
    );
  }

  Row({ children, style, ...props }: FormProps): ReactElement {
    const defaultStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <form
        style={style ? Object.assign(defaultStyle, style) : defaultStyle}
        {...props}
      >
        {children}
      </form>
    );
  }
}

export const FormComponent = new FormComponentClass();

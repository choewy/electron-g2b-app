import {
  ThemeOptions as MuiThemeOptions,
  Components,
  Palette,
  PaletteOptions,
  Theme,
  TypographyVariantsOptions,
  createTheme,
} from '@mui/material';

export class ThemeOptions implements MuiThemeOptions {
  palette: PaletteOptions | undefined;
  typography: TypographyVariantsOptions | ((palette: Palette) => TypographyVariantsOptions) | undefined;
  components: Components<Omit<Theme, 'components'>> | undefined;

  constructor(color: string = '#A00') {
    this.palette = ['dark', 'light'].includes(color)
      ? { mode: color as 'dark' | 'light' }
      : { primary: { main: color } };

    this.typography = { fontSize: 12 };
    this.components = {
      MuiFormControl: {
        defaultProps: {
          fullWidth: true,
          margin: 'normal',
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: { fontSize: '12px' },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            fontSize: '12px',
            '& input': { fontSize: '12px', colorScheme: color === 'dark' ? 'dark' : 'light' },
          },
        },
        defaultProps: {
          fullWidth: true,
          margin: 'normal',
          autoComplete: 'off',
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: { fontSize: '12px' },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: { fontSize: '12px' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { fontSize: '12px' },
        },
        defaultProps: {
          variant: 'contained',
          size: 'large',
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            border: '1px solid #eee',
            borderTop: '0px',
            borderRight: '0px',
            borderLeft: '0px',
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: { marginTop: '10px' },
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: { paddingTop: '10px', fontSize: '12px' },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            border: '1px solid #eee',
            borderBottom: '0px',
            borderRight: '0px',
            borderLeft: '0px',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            fontSize: '12px',
            cursor: 'pointer',
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderCollapse: 'separate',
            borderSpacing: 0,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '& th': {
              backgroundColor: color === 'dark' ? '#303E4A' : '#f7f7f7',
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: `0.5px solid ${color === 'dark' ? 'rgba(50, 50, 50)' : 'rgba(225, 225, 225)'}`,
            fontSize: '12px',
            padding: '8px',
          },
        },
        defaultProps: {
          sx: { textWrap: 'nowrap' },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            border: '1px solid #eee',
            borderTop: '0px',
            borderRight: '0px',
            borderLeft: '0px',
          },
        },
      },
    };
  }

  static create(): Theme {
    return createTheme(new ThemeOptions());
  }
}

import { createMuiTheme } from '@material-ui/core';
import { COLORS } from './colors';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: COLORS.primary,
  },
  shape: {
    borderRadius: 8,
  },
});

theme = {
  ...theme,
  overrides: {
    MuiCard: {
      root: {
        padding: theme.spacing(2),
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'initial',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        margin: '0 16px',
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(),
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: '16px',
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow:
          '0px 1px 1px -1px rgba(0,0,0,0.1), 2px 5px 4px -1px rgba(0,0,0,0.01)',
      },
      elevation3: {
        boxShadow:
          '0px 1px 2px 0px rgba(0,0,0,0.1), 2px 5px 7px 2px rgba(0,0,0,0.01)',
      },
      elevation8: {
        boxShadow:
          '0px 1px 5px 1px rgba(0,0,0,0.05), 2px 5px 9px 2px rgba(0,0,0,0.01)',
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
    MuiTable: {
      stickyHeader: {
        backgroundColor: theme.palette.background.paper,
      },
    },
    MuiTableCell: {
      stickyHeader: {
        backgroundColor: theme.palette.background.paper,
      },
    },
    // @ts-ignore
    MuiToggleButtonGroup: {
      root: {
        // border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.shape.borderRadius,
      },
      selected: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
    // @ts-ignore
    MuiToggleButton: {
      root: {
        background: 'none',
        color: theme.palette.primary.main,
        border: 'none',
        '&:hover': {
          backgroundColor: `${theme.palette.primary.dark} !important`,
          color: `${theme.palette.primary.contrastText} !important`,
        },
      },
      selected: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: `${theme.palette.primary.contrastText} !important`,
      },
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48,
    },
  },
};

export default theme;

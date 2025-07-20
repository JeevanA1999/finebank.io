import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';

type Mode = 'light' | 'dark';

interface ColorModeContextType {
  mode: Mode;
  toggleColorMode: () => void;
}

const getDesignTokens = (mode: Mode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#299D91',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4DAF8E',
      contrastText: '#ffffff',
    },
    error: {
      main: '#E73D1C',
      contrastText: '#ffffff',
    },
    background: {
      default: mode === 'light' ? '#F3F3F3' : '#191919',
      paper: mode === 'light' ? '#E8E8E8' : '#252525',
    },
    text: {
      primary: mode === 'light' ? '#191919' : '#ffffff',
      secondary: mode === 'light' ? '#666666' : '#D2D2D2',
    },
    grey: {
      100: '#F3F3F3',
      200: '#E8E8E8',
      300: '#D2D2D2',
      400: '#9F9F9F',
      500: '#878787',
      600: '#666666',
      700: '#525256',
      800: '#333333',
      900: '#191919',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '52px',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '28px',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: '28px',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '24px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: '20px',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.8125rem',
      lineHeight: '18px',
      fontWeight: 400,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Context
const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

// Custom hook to use color mode context
export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a CustomThemeProvider');
  }
  return context;
};

// Props type for the provider
interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('app-theme') as Mode;
    if (savedMode === 'light' || savedMode === 'dark') {
      setMode(savedMode);
    }
  }, []);

  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('app-theme', newMode);
      return newMode;
    });
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

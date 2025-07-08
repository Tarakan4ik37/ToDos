import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { Appbar } from './Appbar.tsx';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssVarsProvider>
            <CssBaseline />
            <Appbar />
            <App />
        </CssVarsProvider>
    </StrictMode>,
);

import { createTheme, ThemeProvider } from '@mui/material';
import { createRoot } from "react-dom/client";
import App from './App';
import './index.css';

const darkTheme = createTheme({
    palette: { mode: "dark" }
})

const container = document.getElementById('root');
if (!container) {
    throw new Error("Couldn't find app root");
}
const root = createRoot(container);
root.render(
    <ThemeProvider theme={darkTheme}>
        <App />
    </ThemeProvider>
);

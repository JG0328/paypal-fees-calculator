import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';

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

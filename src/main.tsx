import ReactDOM from 'react-dom/client';

import App from './App';

import { ThemeProvider } from './theme/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

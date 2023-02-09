import { RouterProvider } from 'react-router-dom';

/* Context */
import { ThemeProvider } from './theme/context';

/* Routes */
import { rootRouter } from './router';

/**
 * This is the entry point of the app.
 */
const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={ rootRouter } />
    </ThemeProvider>
  );
}

export default App
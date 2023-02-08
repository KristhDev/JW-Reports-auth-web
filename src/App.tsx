import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './theme/context';

import { rootRouter } from './router';

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={ rootRouter } />
    </ThemeProvider>
  );
}

export default App
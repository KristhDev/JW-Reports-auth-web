import { RouterProvider } from 'react-router-dom';

import { rootRouter } from './router';

import './theme/styles/globals.scss';

const App = () => {
  return (
    <RouterProvider router={ rootRouter } />
  );
}

export default App
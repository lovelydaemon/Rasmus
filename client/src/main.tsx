import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import store from './app/store';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <Layout>
        <NotFound />
      </Layout>
    ),
    children: [
      {
        path: 'my',
        element: <Home />,
      },
      {
        path: 'discover',
        element: <Discover />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

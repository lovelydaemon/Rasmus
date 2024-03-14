import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from './app/store';

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

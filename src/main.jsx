import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import SekolahDasar from './pages/sekolah-dasar';
import SekolahMenengahAtas from './pages/sekolah-menengah-atas';
import SekolahMenegahPertama from './pages/sekolah-menengah-pertama';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'sekolah-dasar',
        element: <SekolahDasar />,
      },
      {
        path: 'sekolah-menengah-pertama',
        element: <SekolahMenegahPertama />,
      },
      {
        path: 'sekolah-menengah-atas',
        element: <SekolahMenengahAtas />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

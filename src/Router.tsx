import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Projects } from './pages/Projects.page'
import { RootLayout } from './Layout'; // Import the Layout component

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <RootLayout>
          <HomePage />
        </RootLayout>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: '/projects',
      element: (
        <RootLayout>
          <Projects />
        </RootLayout>
      ),

    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export function Router() {
  return <RouterProvider router={router} />;
}
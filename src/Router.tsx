import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './Layout'; // Import the Layout component
import { HomePage } from './pages/Home.page';
import { Projects } from './pages/Projects.page';
import { Resume } from './pages/Resume.module';

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
    {
      path: '/resume',
      element: (
        <RootLayout>
          <Resume />
        </RootLayout>
      ),
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export function Router() {
  return <RouterProvider router={router} />;
}

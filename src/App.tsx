import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./page/AppLayout";
import Landing from "./page/Landing";
import Onboarding from "./page/Onboarding";
import Joblist from "./page/Joblist";
import Singlepage from "./page/Singlepage";
import Postjob from "./page/Postjob";
import Myjob from "./page/Myjob";
import Savejob from "./page/Savejob";
import PrivateRoute from "./page/PrivateRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { element: <Landing />, path: "/" },
      {
        element: (
          <PrivateRoute>
            <Onboarding />
          </PrivateRoute>
        ),
        path: "/onboarding",
      },
      {
        element: (
          <PrivateRoute>
            <Joblist />
          </PrivateRoute>
        ),
        path: "/jobs",
      },
      {
        element: (
          <PrivateRoute>
            <Singlepage />
          </PrivateRoute>
        ),
        path: "/jobs/:id",
      },
      {
        element: (
          <PrivateRoute>
            <Postjob />
          </PrivateRoute>
        ),
        path: "/post-jobs",
      },
      {
        element: (
          <PrivateRoute>
            <Myjob />
          </PrivateRoute>
        ),
        path: "/my-jobs",
      },
      {
        element: (
          <PrivateRoute>
            <Savejob />
          </PrivateRoute>
        ),
        path: "/save-jobs",
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

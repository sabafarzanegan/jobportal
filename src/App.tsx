import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./page/AppLayout";
import Landing from "./page/Landing";
import Onboarding from "./page/Onboarding";
import Joblist from "./page/Joblist";
import Singlepage from "./page/Singlepage";
import Postjob from "./page/Postjob";
import Myjob from "./page/Myjob";
import Savejob from "./page/Savejob";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { element: <Landing />, path: "/" },
      { element: <Onboarding />, path: "/onboarding" },
      { element: <Onboarding />, path: "/onboarding" },
      { element: <Joblist />, path: "/jobs" },
      { element: <Singlepage />, path: "/jobs/:id" },
      { element: <Postjob />, path: "/post-jobs" },
      { element: <Myjob />, path: "/my-jobs" },
      { element: <Savejob />, path: "/save-jobs" },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

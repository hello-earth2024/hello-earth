import Quiz from 'react-quiz-component';
import { quiz } from './assets/quiz';
import LandingPage from './pages/LandingPage';
import Chatbot from './pages/Chatbot';
import RedirectToHTML_1 from './components/cesium_component_1';
import RedirectToHTML_2 from './components/cesium_component_2';
import RedirectToHTML_3 from './components/cesium_component_3';
import RedirectToHTML_4 from './components/cesium_component_4';
import RedirectToHTML_5 from './components/cesium_component_5';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/chatbot",
      element: <Chatbot />,
    },
    {
      path: "/flyingrivers",
      element: <RedirectToHTML_2 />
    },
    {
      path: "/carbon",
      element: <RedirectToHTML_3 />
    },
    {
      path: "/vegetation",
      element: <RedirectToHTML_4 />
    },
    {
      path: "/temperature",
      element: <RedirectToHTML_5 />
    },
    {
      path: "/precipitation",
      element: <RedirectToHTML_1 />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
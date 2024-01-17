import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Faq from "./pages/help/Faq.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact, { contactAction } from "./pages/help/Contact.jsx";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";
import RootLayoutDash from "./layouts/RootLayoutDash";
import Stock from "./pages/Stock";
import Market from "./pages/Market";
import Dashboard from "./pages/Dashboard";
// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout.jsx";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ResourcesPage from "./pages/Resources.jsx";
import QuizApp from "./components/QuizApp.jsx";

import GovernmentSchemes from "./components/GovernmentSchemes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="stock" element={<Stock />} />
      <Route path="quiz" element={<QuizApp />} />           
      <Route path="dashboard" element={<RootLayoutDash />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="govschemes" element={<GovernmentSchemes />} />
      <Route path="authenticate" element={<Signup />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="resources" element={<ResourcesPage />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Landingpage from "./Pages/Landingpage";
import ConditionsRendring from "./Pages/ConditionsRendring";
import Datafetch from "./Pages/Datafetch";
import Useref from "./Pages/Useref";
import Usecontext from "./Pages/Usecontext";
import Usememo from "./Pages/Usememo";
import Jsfunctions from "./Pages/Jsfunctions";
import Newpage from "./Pages/Newpage";

function App() {
  const routes = [
    {
      path: "/",
      element: <Landingpage />,
    },

    {
      path: "/home",
      element: <Home />,
    },

    {
      path: "/conditional-rendring",
      element: <ConditionsRendring />,
    },

    {
      path: "/about-us",
      element: <Aboutus />,
    },

    {
      path: "/listing",
      element: <Datafetch />,
    },

    {
      path: "/useref",
      element: <Useref />,
    },

    {
      path: "/usecontext",
      element: <Usecontext />,
    },

    {
      path: "/usememo",
      element: <Usememo />,
    },

    {
      path: "/js-concepts",
      element: <Jsfunctions />,
    },

      {
      path: "/landing-page-2",
      element: <Newpage />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

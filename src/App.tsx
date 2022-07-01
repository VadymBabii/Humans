import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;

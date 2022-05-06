import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import TodoContextProvider from "./contexts/TodoContext";
import { routes } from "./routes/routes";
import { RouteObject } from "./DTOs/interfaces/ITodo";

function App(props:any) {
  return (
    <Router>
      <TodoContextProvider>
        <Layout>
          <Routes>
          {routes?.map((route:RouteObject, index: number) => (
              <Route key={index} path={route?.path} element={route?.element} {...props} />
          ))}
          </Routes>
        </Layout>
      </TodoContextProvider>
    </Router>
  );
}

export default App;

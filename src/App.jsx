import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

const App = () => {
  const { authenticated } = usePrivy();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Navigate to="/landing" /> : <Login />}
        />
        <Route
          path="/landing"
          element={authenticated ? <LandingPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

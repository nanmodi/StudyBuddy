import React from "react";
import { usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
  const { logout, authenticated } = usePrivy();

  if (!authenticated) return null;

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="spacer"></div>
        <button onClick={logout} className="logout-button">
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

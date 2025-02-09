import React from "react";
import { usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
  const { logout, authenticated } = usePrivy();

  // Only show the navbar if the user is authenticated
  if (!authenticated) return null;

  return (
    <nav className="bg-gray-900 w-full p-4 fixed top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { usePrivy } from "@privy-io/react-auth";

const Logout = () => {
  const { logout } = usePrivy();

  return (
    <button
      onClick={logout}
      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
    >
      Log Out
    </button>
  );
};

export default Logout;

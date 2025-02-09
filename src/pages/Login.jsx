import React from "react";
import { usePrivy } from "@privy-io/react-auth";

const Login = () => {
  const { login } = usePrivy();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={login}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;

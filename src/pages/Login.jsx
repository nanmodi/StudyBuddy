import React from "react";
import { usePrivy } from "@privy-io/react-auth";

const Login = () => {
  const { login } = usePrivy();

  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-gray-100">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={login}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;

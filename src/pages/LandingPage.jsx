import React from "react";
import Logout from "./Logout";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Landing Page!</h1>
      <Logout />
    </div>
  );
};

export default LandingPage;

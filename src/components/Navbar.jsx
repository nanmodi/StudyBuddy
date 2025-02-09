import React from "react";
// import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const { ready, authenticated, login, user, logout } = usePrivy();
  const navigate = useNavigate();

  const handleLoginLogout = useCallback(() => {
    if (authenticated) {
      logout();
    } else {
      login().then(() => {
        if (user) {
          // Additional user-related logic can go here
          console.log(user);
        }
      });
    }
  }, [authenticated, login, logout, user]);

  const handleGetStarted = () => {
    // Navigate to the onboarding route when the "Let's Get Started" button is clicked
    navigate("/landing");
  };

  return (
    <div className="hidden flex-row justify-end gap-2 sm:flex">
      <CustomButton
        btnType="button"
        title={authenticated ? "Log Out" : "Log In"}
        styles={authenticated ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
        handleClick={handleLoginLogout}
      />
      {/* "Let's Get Started" button, visible only when the user is logged in */}
      {authenticated && (
        <CustomButton
          btnType="button"
          title="Let's Get Started"
          styles="bg-[#1dc071]" // Green color for the active button
          handleClick={handleGetStarted}
        />
      )}
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../Assets/white_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../../redux/authSlice"; // adjust path

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { instance, accounts } = useMsal();
  const activeAccount = accounts[0];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinks = [];

  const handleContactClick = () => {
    const emailTo1 = "anupam.srivastava@global-csg.com";
    const emailTo2 = "deepak.kashyap@global-csg.com";
    const emailCc = "amala.lizy@global-csg.com";
    const mailtoLink = `mailto:${emailTo1};${emailTo2}?cc=${emailCc}`;
    window.location.href = mailtoLink;
  };

  // ✅ Combined logout function
  const handleLogout = async () => {
    try {
      await instance.logoutPopup(); // or logoutRedirect if you want full redirect
      dispatch(logoutAction()); // update redux state
      navigate("/login"); // redirect
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // ✅ Helper: Get user initials (first + last name)
  const getUserInitials = (fullName) => {
    if (!fullName) return "U";
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Fetch user profile photo
  useEffect(() => {
    const fetchProfilePhoto = async () => {
      if (activeAccount) {
        try {
          const tokenResponse = await instance.acquireTokenSilent({
            scopes: ["User.Read"],
            account: activeAccount,
          });

          const response = await fetch(
            "https://graph.microsoft.com/v1.0/me/photo/$value",
            {
              headers: {
                Authorization: `Bearer ${tokenResponse.accessToken}`,
              },
            }
          );

          if (response.ok) {
            const blob = await response.blob();
            setProfileImage(URL.createObjectURL(blob));
          }
        } catch (error) {
          console.warn("No profile photo found or token error.", error);
        }
      }
    };
    fetchProfilePhoto();
  }, [activeAccount, instance]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar-container fixed top-0 pl-4 pr-4 flex justify-between items-center">
      <div className="logo">
        <Link to="/dashboard">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      <div className="nav-items flex items-center space-x-4">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.href} className="nav-link">
            {link.text}
          </Link>
        ))}

        <button onClick={handleContactClick} className="contact-btn">
          CONTACT US
        </button>

        {activeAccount && (
          <div className="relative" ref={dropdownRef}>
            {/* ✅ Navbar Avatar */}
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-2xl ml-5 cursor-pointer h-8 w-8"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            ) : (
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="rounded-full ml-5 cursor-pointer h-8 w-8 bg-gray-500 text-white flex items-center justify-center font-semibold"
              >
                {getUserInitials(activeAccount.name)}
              </div>
            )}

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[200px] bg-white border border-gray-200 rounded-md shadow-md z-10">
                <div className="flex items-center px-4 py-3 border-b border-gray-200">
                  {/* ✅ Dropdown Avatar */}
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="h-10 w-10 rounded-full"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gray-500 text-white flex items-center justify-center font-bold">
                      {getUserInitials(activeAccount.name)}
                    </div>
                  )}
                  <div className="ml-3">
                    <div className="font-medium text-gray-800">
                      {activeAccount.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {activeAccount.username}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

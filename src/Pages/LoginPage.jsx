import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useMsal } from "@azure/msal-react";
import backgroundImage from "../Assets/61758.jpg";
import logo from "../Assets/white_logo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { instance } = useMsal();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email is not valid!";
    if (!password) newErrors.password = "Password is required!";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(login());
      navigate("/landingScreen");
    }
  };

  const handleMicrosoftLogin = () => {
    instance
      .loginPopup()
      .then(() => {
        dispatch(login());
        navigate("/landingScreen");
      })
      .catch((err) => console.error("Microsoft login error:", err));
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Login Form */}
      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl">
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Single Sign On
          </h2>
          <p className="text-gray-500 text-sm">
            Sign in with your identity provider
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={handleMicrosoftLogin}
            className="w-full bg-white border border-gray-300 rounded-lg shadow py-2 text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Login with Microsoft 365
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

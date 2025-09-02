// import { React, useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import userData from "../data/users.json";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/actions/authActions";
// import { useMsal } from "@azure/msal-react";

// function LoginPage() {
//   const [isPassword, setIsPassword] = useState(true);
//   const inputRef = useRef(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState({});
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { instance } = useMsal();
//   const validate = () => {
//     const newEorrors = {};
//     if (!email) {
//       newEorrors.email = "Email is Required!";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newEorrors.email = "Email is Not Valid!";
//     }
//     if (!password) {
//       newEorrors.password = "Password is Not Found!";
//     } else if (password.length < 6) {
//       newEorrors.password = "Password length should be at least 6 characters";
//     }
//     setError(newEorrors);
//     return Object.keys(newEorrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
//       const user =
//         userData.find(
//           (user) => user.email === email && user.password === password
//         ) ?? null;

//       console.log(user);
//       if (user) {
//         console.log("Login successful!", user);
//         dispatch(loginSuccess(user));
//         navigate("/landingScreen");
//       } else {
//         setError("Invalid email or password!");
//       }
//     }
//   };
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   const handleMicrosoftLogin = () => {
//     instance
//       .loginPopup()
//       .then((response) => {
//         // Use response.account for user info
//         // Redirect or set user state as needed
//         console.log("Microsoft login success:", response);
//         dispatch(loginSuccess(response.account));
//         navigate("/landingScreen");
//       })
//       .catch((error) => {
//         console.error("Microsoft login error:", error);
//       });
//   };

//   return (
//     <div className=" w-full h-screen p-1">
//       <div className="w-full h-full ">
//         {/* grid session  */}
//         <header>
//           <div className="flex justify-end mr-10">
//             <div className=" rounded-tl rounded-tr">
//               <img
//                 className="p-4 w-[170px] "
//                 src="/src/assets/creative-logo.png"
//                 alt="icon"
//               />
//             </div>
//           </div>
//         </header>
//         <div className="grid grid-cols-12 h-[calc(100%-85px)] relative">
//           {/* HR Portal Image */}
//           <div className="col-span-6 relative">
//             <img
//               src="/src/assets/hr-logo.jpg"
//               className="absolute  top-1/2 transform -translate-y-1/2 z-10 w-[100%]"
//               alt="HR Potal Image"
//             />
//           </div>
//           {/* Login Form */}
//           <div
//             className="col-span-6 rounded flex items-center justify-center relative"
//             style={{ display: "none" }}
//           >
//             <div className="w-full max-w-md border border-gray-300 p-10 bg-white shadow-md rounded-lg">
//               <div className="text-center mt-5 font-medium text-3xl text-[#ffb60c]">
//                 <p className="text-[#21916b] font-bold">Sign In</p>
//                 <p>HR Portal</p>
//               </div>
//               {/* <div className=" mt-15"> */}

//               <form onSubmit={handleSubmit} className="mt-8">
//                 {typeof error === "string" && (
//                   <p className="text-red-500 text-sm text-center">{error}</p>
//                 )}
//                 <label
//                   htmlFor="email"
//                   className="block text-lg font-medium text-gray-700 mb-1 ml-3"
//                 >
//                   User Name
//                 </label>
//                 <input
//                   type="text"
//                   value={email}
//                   ref={inputRef}
//                   onChange={(e) => setEmail(e.target.value)}
//                   id="email"
//                   name="email"
//                   placeholder="Eg: abc@csg-global.com"
//                   className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//                 />
//                 {error.email && (
//                   <p className="text-red-500 text-sm ">{error.email}</p>
//                 )}
//                 <label
//                   htmlFor="password"
//                   className="block text-lg font-medium text-gray-700 mt-4 ml-3"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={isPassword ? "password" : "text"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     name="password"
//                     id="password"
//                     placeholder="*********"
//                     className={`w-full px-4 py-2 pr-10 border ${
//                       error.password ? "border-red-500" : "border-gray-300"
//                     } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   />
//                   <div
//                     className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
//                     onClick={() => setIsPassword(!isPassword)}
//                   >
//                     {isPassword ? <FaEyeSlash /> : <FaEye />}
//                   </div>
//                 </div>

//                 {error.password && (
//                   <p className="text-red-500 text-sm ">{error.password}</p>
//                 )}
//                 <div className="flex place-content-between">
//                   {/* <p className="mt-1 underline text-[#ffb60c]">
//                     Create New Account
//                   </p> */}
//                   {/* <p className="mt-1 text-base text-gray-500">
//                     Forget Password
//                   </p> */}
//                 </div>
//                 <div
//                   className="bg-[#21916b] flex mb-5 justify-center items-center mt-3 h-12 cursor-pointer"
//                   onClick={handleSubmit}
//                 >
//                   <button className="text-white" type="submit">
//                     Sign in
//                   </button>
//                 </div>
//               </form>

//               {/* </div> */}
//             </div>
//           </div>
//           <div className="col-span-6 rounded flex items-center justify-center relative">
//             <div className="w-full max-w-md border border-gray-300 p-10 bg-white shadow-md rounded-lg flex flex-col items-center">
//               <img
//                 src="/src/assets/creative-logo.png"
//                 alt="Creative Synergies Group"
//                 className="w-48 mb-6"
//               />
//               <h2 className="text-2xl font-semibold mb-2 text-center">
//                 Single sign on
//               </h2>
//               <p className="text-gray-600 mb-6 text-center">
//                 Sign in with your identity provider
//               </p>
//               <button
//                 className="w-full bg-white border border-gray-300 rounded shadow px-6 py-3 mb-4 text-lg font-medium hover:bg-[#21916b] hover:text-white transition cursor-pointer"
//                 onClick={handleMicrosoftLogin}
//               >
//                 Login with Microsoft365
//               </button>
//               <div
//                 className="flex items-center w-full my-2"
//                 style={{ display: "none" }}
//               >
//                 <div className="flex-grow border-t border-gray-300"></div>
//                 <span className="mx-2 text-gray-400">OR</span>
//                 <div className="flex-grow border-t border-gray-300"></div>
//               </div>
//               <button
//                 className="w-full flex items-center justify-center bg-white border border-gray-300 rounded shadow px-6 py-3 mb-6 text-lg font-medium hover:bg-gray-50 transition"
//                 style={{ display: "none" }}
//               >
//                 <img
//                   src="/src/assets/darwinbox-icon.png"
//                   alt="Darwinbox"
//                   className="h-6 w-6 mr-2"
//                 />
//                 Sign in with Darwinbox Credentials
//               </button>
//               <div
//                 className="flex flex-col items-center mt-4 w-full"
//                 style={{ display: "none" }}
//               >
//                 <span className="text-xs text-gray-400 mb-2 flex items-center">
//                   Powered By
//                   <img
//                     src="/src/assets/darwinbox-icon.png"
//                     alt="darwinbox"
//                     className="h-4 w-4 ml-1"
//                   />
//                   <span className="ml-1 font-semibold text-gray-500">
//                     darwinbox
//                   </span>
//                 </span>
//                 <span className="text-xs text-gray-400 mb-1">
//                   © 2025 Darwinbox Digital Solutions Pvt Ltd.
//                 </span>
//                 <div className="flex gap-2 text-xs text-blue-500 underline">
//                   <a href="#" className="hover:text-blue-700">
//                     Cookie Policy
//                   </a>
//                   <span>|</span>
//                   <a href="#" className="hover:text-blue-700">
//                     Terms Of Use
//                   </a>
//                   <span>|</span>
//                   <a href="#" className="hover:text-blue-700">
//                     Privacy Policy
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

// import { React, useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import userData from "../data/users.json";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/authSlice"; // ✅ use login from slice
// import { useMsal } from "@azure/msal-react";

// function LoginPage() {
//   const [isPassword, setIsPassword] = useState(true);
//   const inputRef = useRef(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState({});
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { instance } = useMsal();

//   const validate = () => {
//     const newErrors = {};
//     if (!email) {
//       newErrors.email = "Email is Required!";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Email is Not Valid!";
//     }
//     if (!password) {
//       newErrors.password = "Password is Not Found!";
//     } else if (password.length < 6) {
//       newErrors.password = "Password length should be at least 6 characters";
//     }
//     setError(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
//       const user =
//         userData.find(
//           (user) => user.email === email && user.password === password
//         ) ?? null;

//       console.log(user);
//       if (user) {
//         console.log("Login successful!", user);
//         dispatch(login()); // ✅ sets isAuthenticated = true
//         navigate("/landingScreen");
//       } else {
//         setError("Invalid email or password!");
//       }
//     }
//   };

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   const handleMicrosoftLogin = () => {
//     instance
//       .loginPopup()
//       .then((response) => {
//         console.log("Microsoft login success:", response);
//         dispatch(login()); // ✅ sets isAuthenticated = true
//         navigate("/landingScreen");
//       })
//       .catch((error) => {
//         console.error("Microsoft login error:", error);
//       });
//   };

//   return (
//        <div className=" w-full h-screen p-1">
//       <div className="w-full h-full ">
//         {/* grid session  */}
//         <header>
//           <div className="flex justify-end mr-10">
//             <div className=" rounded-tl rounded-tr">
//               <img
//                 className="p-4 w-[170px] "
//                 src="/src/assets/creative-logo.png"
//                 alt="icon"
//               />
//             </div>
//           </div>
//         </header>
//         <div className="grid grid-cols-12 h-[calc(100%-85px)] relative">
//           {/* HR Portal Image */}
//           <div className="col-span-6 relative">
//             <img
//               src="/src/assets/hr-logo.jpg"
//               className="absolute  top-1/2 transform -translate-y-1/2 z-10 w-[100%]"
//               alt="HR Potal Image"
//             />
//           </div>
//           {/* Login Form */}
//           <div
//             className="col-span-6 rounded flex items-center justify-center relative"
//             style={{ display: "none" }}
//           >
//             <div className="w-full max-w-md border border-gray-300 p-10 bg-white shadow-md rounded-lg">
//               <div className="text-center mt-5 font-medium text-3xl text-[#ffb60c]">
//                 <p className="text-[#21916b] font-bold">Sign In</p>
//                 <p>HR Portal</p>
//               </div>
//               {/* <div className=" mt-15"> */}

//               <form onSubmit={handleSubmit} className="mt-8">
//                 {typeof error === "string" && (
//                   <p className="text-red-500 text-sm text-center">{error}</p>
//                 )}
//                 <label
//                   htmlFor="email"
//                   className="block text-lg font-medium text-gray-700 mb-1 ml-3"
//                 >
//                   User Name
//                 </label>
//                 <input
//                   type="text"
//                   value={email}
//                   ref={inputRef}
//                   onChange={(e) => setEmail(e.target.value)}
//                   id="email"
//                   name="email"
//                   placeholder="Eg: abc@csg-global.com"
//                   className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//                 />
//                 {error.email && (
//                   <p className="text-red-500 text-sm ">{error.email}</p>
//                 )}
//                 <label
//                   htmlFor="password"
//                   className="block text-lg font-medium text-gray-700 mt-4 ml-3"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={isPassword ? "password" : "text"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     name="password"
//                     id="password"
//                     placeholder="*********"
//                     className={`w-full px-4 py-2 pr-10 border ${
//                       error.password ? "border-red-500" : "border-gray-300"
//                     } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   />
//                   <div
//                     className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
//                     onClick={() => setIsPassword(!isPassword)}
//                   >
//                     {isPassword ? <FaEyeSlash /> : <FaEye />}
//                   </div>
//                 </div>

//                 {error.password && (
//                   <p className="text-red-500 text-sm ">{error.password}</p>
//                 )}
//                 <div className="flex place-content-between">
//                   {/* <p className="mt-1 underline text-[#ffb60c]">
//                     Create New Account
//                   </p> */}
//                   {/* <p className="mt-1 text-base text-gray-500">
//                     Forget Password
//                   </p> */}
//                 </div>
//                 <div
//                   className="bg-[#21916b] flex mb-5 justify-center items-center mt-3 h-12 cursor-pointer"
//                   onClick={handleSubmit}
//                 >
//                   <button className="text-white" type="submit">
//                     Sign in
//                   </button>
//                 </div>
//               </form>

//               {/* </div> */}
//             </div>
//           </div>
//           <div className="col-span-6 rounded flex items-center justify-center relative">
//             <div className="w-full max-w-md border border-gray-300 p-10 bg-white shadow-md rounded-lg flex flex-col items-center">
//               <img
//                 src="/src/assets/creative-logo.png"
//                 alt="Creative Synergies Group"
//                 className="w-48 mb-6"
//               />
//               <h2 className="text-2xl font-semibold mb-2 text-center">
//                 Single sign on
//               </h2>
//               <p className="text-gray-600 mb-6 text-center">
//                 Sign in with your identity provider
//               </p>
//               <button
//                 className="w-full bg-white border border-gray-300 rounded shadow px-6 py-3 mb-4 text-lg font-medium hover:bg-[#21916b] hover:text-white transition cursor-pointer"
//                 onClick={handleMicrosoftLogin}
//               >
//                 Login with Microsoft365
//               </button>
//               <div
//                 className="flex items-center w-full my-2"
//                 style={{ display: "none" }}
//               >
//                 <div className="flex-grow border-t border-gray-300"></div>
//                 <span className="mx-2 text-gray-400">OR</span>
//                 <div className="flex-grow border-t border-gray-300"></div>
//               </div>
//               <button
//                 className="w-full flex items-center justify-center bg-white border border-gray-300 rounded shadow px-6 py-3 mb-6 text-lg font-medium hover:bg-gray-50 transition"
//                 style={{ display: "none" }}
//               >
//                 <img
//                   src="/src/assets/darwinbox-icon.png"
//                   alt="Darwinbox"
//                   className="h-6 w-6 mr-2"
//                 />
//                 Sign in with Darwinbox Credentials
//               </button>
//               <div
//                 className="flex flex-col items-center mt-4 w-full"
//                 style={{ display: "none" }}
//               >
//                 <span className="text-xs text-gray-400 mb-2 flex items-center">
//                   Powered By
//                   <img
//                     src="/src/assets/darwinbox-icon.png"
//                     alt="darwinbox"
//                     className="h-4 w-4 ml-1"
//                   />
//                   <span className="ml-1 font-semibold text-gray-500">
//                     darwinbox
//                   </span>
//                 </span>
//                 <span className="text-xs text-gray-400 mb-1">
//                   © 2025 Darwinbox Digital Solutions Pvt Ltd.
//                 </span>
//                 <div className="flex gap-2 text-xs text-blue-500 underline">
//                   <a href="#" className="hover:text-blue-700">
//                     Cookie Policy
//                   </a>
//                   <span>|</span>
//                   <a href="#" className="hover:text-blue-700">
//                     Terms Of Use
//                   </a>
//                   <span>|</span>
//                   <a href="#" className="hover:text-blue-700">
//                     Privacy Policy
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

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

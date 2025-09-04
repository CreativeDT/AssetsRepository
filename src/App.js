// //app.js
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import LoginPage from "./Pages/LoginPage"
// import { useSelector } from "react-redux";
// import CategoriesPage from "./Components/Categories";
// import ContactUs from "./Pages/ContactUs/ContactUs"
// import LandingScreen from "./Pages/LandingPage/LandingScreen";

// function App() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   console.log(isAuthenticated);
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={isAuthenticated ? <LandingScreen /> : <LoginPage />}
//         />
//         <Route
//           path="/landingScreen"
//           element={
//             isAuthenticated ? <LandingScreen /> : <Navigate to="/" replace />
//           }
//         />

//         <Route
//           path="/categories"
//           element={
//             isAuthenticated ? <CategoriesPage /> : <Navigate to="/" replace />
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             isAuthenticated ? <ContactUs /> : <Navigate to="/" replace />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import { useSelector } from "react-redux";
import CategoriesPage from "./Components/Categories";
import ContactUs from "./Pages/ContactUs/ContactUs";
import LandingScreen from "./Pages/LandingPage/LandingScreen";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router basename="/">
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <LandingScreen /> : <LoginPage />}
        />
        <Route
          path="/landingScreen"
          element={
            isAuthenticated ? <LandingScreen /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/categories"
          element={
            isAuthenticated ? <CategoriesPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/contact"
          element={
            isAuthenticated ? <ContactUs /> : <Navigate to="/login" replace />
          }
        />

        {/* catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

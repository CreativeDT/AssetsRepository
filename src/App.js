import CategoriesPage from "./Components/Categories";
import ContactUs from "./Pages/ContactUs/ContactUs";

import LandingScreen from "./Pages/LandingPage/LandingScreen";

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
        <LandingScreen />
            <Routes>
                <Route path="/catogories" element={<CategoriesPage/>} /> 
                {/* <Route path="/landing" element={<LandingPage />} />  */}
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </div>
    );
}

export default App;
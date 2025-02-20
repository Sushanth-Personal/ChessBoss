import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
  import "./App.css";
  import { useState, useEffect } from "react";
  import LandingPage from "./pages/LandingPage/LandingPage";
 
  function App() {
    let baseURL;
  
    if(import.meta.env.VITE_API_STATUS === "DEVELOPMENT"){
      baseURL = "http://localhost:5000";
    }
    
    if(import.meta.env.VITE_API_STATUS === "PRODUCTION"){
      baseURL = import.meta.env.VITE_API_BASE_URL;
    }
    // const [isLoading, setIsLoading] = useState(true);
  
    // useEffect(() => {
    //   // Simulate a backend health check or wake-up process
    //   const checkBackend = async () => {
    //     try {
    //       const response = await fetch(`${baseURL}/`);
    //       if (response.ok) {
    //         setIsLoading(false);
    //       }
    //     } catch (error) {
    //       console.log("Backend waking up...");
    //       console.error("Error checking backend health:", error);
    //       setTimeout(checkBackend, 3000); // Retry every 3 seconds
    //     }
    //   };
  
    //   checkBackend();
    // }, []);
  
    // if (isLoading) {
    //   // Display loading screen while waiting
    //   return (
    //     <div className="loading-screen">
    //       <h1>Chess Boss</h1>
    //       <p>Waking up the app. Please wait...</p>
    //       <ClipLoader color="#ffffff" size={50} />
    //     </div>
    //   );
    // }
    return (
      <Router>
        <Routes>
          {/* Define routes for the login and home pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  
import React, { useState, useEffect } from 'react';
import './SplashScreen.css'
function SplashScreen({ children }) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return showSplashScreen ? (
  <div className="splash">
  <img src="https://i.ibb.co/kDfPYDW/Nordstone-Assignment-By-Soumili.png" alt="Intro"/>
  </div>
  ) : (
    children
  );
}

export default SplashScreen;

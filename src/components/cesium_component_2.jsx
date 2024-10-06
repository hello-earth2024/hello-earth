import React, { useEffect, useState } from "react";

const RedirectToHTML_2 = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen size is mobile (width <= 768px)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener to detect screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);

    // Redirect to the desired URL after the popup is closed
    window.location.href = "/cesium/examples/cesium/time_2.html"; // Modify this URL as needed
  };

  return (
    <>
      {showPopup && (
        <div style={popupStyle}>
          <div style={isMobile ? popupContentStyleMobile : popupContentStyle}>
            <p style={{ color: "black", fontSize: isMobile ? "14px" : "18px", marginBottom: "20px" }}>
            Called true-color images, these are natural-looking images of the Earth captured by the VIIRS (Visible Infrared Imaging Radiometer Suite), a sensor aboard the Suomi NPP satellite. Through this visualization, it is possible to see land surface, oceanic, and atmospheric features. In particular, the presence of atmospheric rivers can be observed—long and narrow regions of the atmosphere that carry water vapor from the tropics toward the poles.
            </p> 
            <p style={{ color: "black", fontSize: isMobile ? "14px" : "18px", marginBottom: "20px" }}>
              The explorer offers several features:
            </p>
            <ul style={{ textAlign: "left", fontSize: isMobile ? "14px" : "18px", color: "black" }}>
              <li>1. Using your mouse (or touchscreen), you can rotate the globe.</li>
              <li>2. By scrolling, you can zoom in or out.</li>
              <li>3. In the bottom left corner, you can see the current date of the map. If you wish, you can adjust the speed at which time is passing.</li>
              <li>4. At the bottom of the screen, there's a timeline. By clicking on any point, you can jump to a specific date.</li>
            </ul>
            <button onClick={closePopup} style={buttonStyle}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

// Styles
const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

// Default popup content style (for desktop)
const popupContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  width: "1000px", // Increased popup width
};

// Adjusted popup content style for mobile
const popupContentStyleMobile = {
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "8px",
  textAlign: "center",
  width: "95%", // Increased popup width for mobile
};

// Button style
const buttonStyle = {
  marginTop: "200px",
  padding: "40px 40px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default RedirectToHTML_2;
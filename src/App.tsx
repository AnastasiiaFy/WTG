import React from "react";
import RegionFiltersPage from "./pages/RegionFiltersPage";


const App = () => {
  return (
    <div style={{
      width: "100vw", height: "100vh", 
      backgroundImage: "url('/images/background/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <RegionFiltersPage />
    </div>
  );
};

export default App;

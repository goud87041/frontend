import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Ensure BrowserRouter is imported
import { SideBar } from "./items/sideBar";
import {Sidebar1} from "./items/demosideBar"

function App() {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="w-full h-screen flex ">
        <SideBar/>
        <div className="flex-1">
          <Routes>
            <Route path="/dashboard" element={<h1 className=""></h1>} />
            <Route path="/students" element={<h1></h1>} />
            <Route path="/chapter" element={<h1></h1>} />
            <Route path="/help" element={<h1></h1>} />
            <Route path="/reports" element={<h1></h1>} />
            <Route path="/settings" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

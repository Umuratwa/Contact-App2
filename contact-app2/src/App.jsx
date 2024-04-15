import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage";
import DisplayPage from "./pages/DisplayPage";
import UpdatePage from "./pages/UpdatePage";
import UserInfo from "./pages/UserInfo"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPage />} />
        <Route path="/contacts" element={<DisplayPage />} />
        {/* Update the route to accept a parameter */}
        <Route path="/update/:contactId" element={<UpdatePage />} />
        {/* Update the route to accept a parameter */}
        <Route path="/details/:contactId" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
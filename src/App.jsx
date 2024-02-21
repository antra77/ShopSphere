import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div className="h-screen w-screen flex">

      {/* homepage functionality */}
      
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-yellow-700 font-bold absolute left-[17%] top-[3%] border border-yellow-600 p-2 rounded-full bg-yellow-200">
          Home
        </Link>
      )}

      {/* applying routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;

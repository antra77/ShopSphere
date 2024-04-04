import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import TopNav from "./components/TopNav";
import './App.css'

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div className="main flex flex-col">
      <TopNav/>
    <div className="w-full flex ">

      {/* homepage functionality */}
      
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-zinc-700 font-bold absolute right-[5%] top-[2%] p-3 rounded-full bg-blue-200">
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
    </div></div>
  );
};

export default App;

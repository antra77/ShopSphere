import React from "react";

const TopNav = () => {
  return (
    <div className=" w-full bg-zinc-50 flex items-center gap-40 px-5 py-2">
      <div className="flex gap-2 items-center">
        <img src="/shop.svg" alt="" className="w-12 h-12" />
        <h1 className="font-bold uppercase text-zinc-800">ShopSphere</h1>
      </div>
      <h3 className="font-semibold text-zinc-800 text-xl">
        Welcome to ShopSphere - Your Gateway to Endless Shopping Excitement!
      </h3>
    </div>
  );
};

export default TopNav;

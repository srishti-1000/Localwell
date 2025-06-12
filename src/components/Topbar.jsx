

import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Topbar = () => {
  return (
    <div className="relative flex items-center justify-between p-4 border-b bg-white font-poppins">
      
      <NavLink to="/" className="flex-shrink-0 z-10">
        <img src={Logo} alt="Logo" className="h-8 w-auto cursor-pointer" />
      </NavLink>

      
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex gap-[4rem]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600 pb-1 font-semibold"
                : "text-black pb-1 font-semibold"
            }
          >
            Purchases
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600 pb-1 font-semibold"
                : "text-black pb-1 font-semibold"
            }
          >
            Stock
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600 pb-1 font-semibold"
                : "text-black pb-1 font-semibold"
            }
          >
            Sales
          </NavLink>
          
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-200 text-black w-14 h-14 rounded-full text-[10px] leading-[12px]">
        <span className="text-sm font-semibold">NA</span>
        <span className="text-[9px] font-medium">PROFILE</span>
      </div>
    </div>
  );
};

export default Topbar;


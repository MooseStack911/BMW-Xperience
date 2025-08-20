
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; //  hamburger icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-10 bg-black text-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/images/bmw-logo.png"
          alt="bmw-logo"
          className="h-10 w-auto object-contain animate-spin"
        />
        <span className="hidden md:inline font-bold text-lg">BMW</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {["/", "/about", "/services", "/models", "/contact"].map((path, i) => {
          const names = ["Home", "About", "Services", "Models", "Contact-Us"];
          return (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold border-b-2 border-red-500 pb-1"
                  : "hover:text-amber-100 transition-colors duration-300"
              }
            >
              {names[i]}
            </NavLink>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden">
          {["/", "/about", "/services", "/models", "/contact"].map((path, i) => {
            const names = ["Home", "About", "Services", "Models", "Contact-Us"];
            return (
              <NavLink
                key={i}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-bold border-b-2 border-red-500 pb-1"
                    : "hover:text-amber-100 transition-colors duration-300"
                }
              >
                {names[i]}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


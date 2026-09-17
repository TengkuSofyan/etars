import { useState, React } from "react";
import { Menu, X } from "lucide-react";
import logo from "/img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/" },
    { name: "What We Do", href: "/we-do" },
    { name: "Resources", href: "/resource" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white text-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold">
              <img src={logo} style={{ width: "60px", height: "50px" }} />
              {/* Logo */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-3 text-primary py-2 rounded-md text-md font-medium hover:bg-primary hover:text-slate-50 transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex text-black items-center justify-center p-2 rounded-md hover:bg-slate-700 focus:outline-none transition duration-300"
            >
              {isOpen ? (
                <X size={24} color="#000" />
              ) : (
                <Menu size={24} color="#000" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-primary px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

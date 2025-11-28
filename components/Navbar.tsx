import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import Logo from '../nubenta-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-3">
  <img
    src="/nubenta-logo.png"
    alt="Nubenta Logo"
    className="h-10 w-auto object-contain"
  />
</NavLink>

            {/* <NavLink to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-wider">
                NUBENTA
              </span>
            </NavLink> */}
          </div>
          
          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-neon-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] scale-105'
                        : 'text-slate-400 hover:text-white hover:text-shadow-sm'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            
            <NavLink to="/book-demo">
              <Button variant="primary" glowColor="blue" className="!px-6 !py-2 !text-sm">
                Book Demo
              </Button>
            </NavLink>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-900 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-slate-900 text-neon-blue'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-2">
                <NavLink to="/book-demo" onClick={() => setIsOpen(false)}>
                  <Button fullWidth glowColor="blue">Book Demo</Button>
                </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
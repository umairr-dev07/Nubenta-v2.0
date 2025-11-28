import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';



const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">

            <div className="flex items-center gap-3 mb-4">
<img src="/nubenta-logo.png" alt="Nubenta Logo" className="w-22 h-12 object-contain" />
</div>

              {/* <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                NUBENTA
              </h3> */}
            <p className="text-slate-400 max-w-md">
              Empowering businesses with autonomous AI agents. 
              Beeba and Jennie are designed to scale your reach and revenue while you focus on vision.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><NavLink to="/pricing" className="text-slate-400 hover:text-neon-blue transition-colors">Beeba Bot</NavLink></li>
              <li><NavLink to="/pricing" className="text-slate-400 hover:text-neon-blue transition-colors">Jennie Bot</NavLink></li>
              <li><NavLink to="/pricing" className="text-slate-400 hover:text-neon-blue transition-colors">Pricing</NavLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-slate-400 hover:text-neon-purple transition-colors">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-slate-400 hover:text-neon-purple transition-colors">Get in Touch</NavLink></li>
              <li><NavLink to="/book-demo" className="text-slate-400 hover:text-neon-purple transition-colors">Book Demo</NavLink></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NUBENTA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
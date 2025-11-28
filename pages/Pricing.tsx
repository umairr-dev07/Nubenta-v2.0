import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Building2, Check } from 'lucide-react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
       {/* Mesh Grid Background */}
       <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

       {/* Floating Elements */}
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none z-0" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Pricing Models
            </span>
          </h1>
          <p className="text-xl text-slate-400">
            Invest in technology, not overhead. Deploy NUBENTA agents today.
          </p>
        </div>

        {/* 3 Column Grid - Explicitly Horizontal on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="h-full">
               <ProductCard 
                product={product} 
                showPrice={true} 
                pricingMode={true} 
              />
            </div>
          ))}

          {/* Enterprise Card */}
          <div className="group relative h-full">
             <div className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col 
                          transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
                          hover:border-white/20">
              
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10" />

              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-3 mb-4 shadow-lg flex items-center justify-center border border-white/5">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Custom Solutions
                </p>
              </div>

              <p className="text-slate-400 mb-8 flex-grow">
                For agencies and corporations needing high-volume agent clusters and dedicated support.
              </p>

              <div className="mb-8">
                 <span className="text-4xl font-bold text-white">Custom</span>
              </div>

              <ul className="space-y-4 mb-8">
                {['Unlimited Agent Clusters', 'Dedicated Account Manager', 'Custom Integration API', 'Priority 24/7 Support', 'White Label Options'].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-slate-700">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                 <NavLink to="/contact" className="block">
                  <Button fullWidth variant="outline" glowColor="blue">
                    Contact Sales
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
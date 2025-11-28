import React from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS, FEATURES_LIST } from '../constants';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Consistent Tech Background Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />

        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-float">
            <Star className="w-4 h-4 text-neon-blue fill-neon-blue" />
            <span className="text-sm font-medium text-slate-300 tracking-wider font-heading">WELCOME TO NUBENTA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
            The Future is <br />
            {/* Removed to-slate-900 to fix invisible effect, made uppercase */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-gradient-x">
              INTELLIGENT
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed font-light font-body">
            Stop trading time for money. The workforce of tomorrow is here today. 
            <strong>Beeba</strong> creates your content strategy. <strong>Jennie</strong> closes your sales.
            <br />
            <span className="text-white font-semibold block mt-4">Scale Without Limits.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <NavLink to="/book-demo">
              {/* Reduced length and size from previous large version */}
              <Button variant="primary" glowColor="white" className="min-w-[240px] !text-base !py-3 group">
                Start Transformation
                <ArrowRight className="w-4 h-4 ml-2 animate-pop-in-out inline-block" />
              </Button>
            </NavLink>
            <NavLink to="/pricing">
              {/* Made smaller comparatively */}
              <Button variant="outline" glowColor="white" className="min-w-[160px] !text-sm !py-3">
                View Solutions
              </Button>
            </NavLink>
          </div>
        </div>

        {/* 3D Grid Floor Effect */}
        <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Scale with NUBENTA?</h2>
            <p className="text-slate-400 text-lg">Replace entire departments with intelligent software.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES_LIST.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-2 backdrop-blur-md">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <feature.icon className="w-6 h-6 text-neon-blue group-hover:text-neon-purple transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview Section - NO PRICES */}
      <section className="py-24 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Meet Your New Employees</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="w-full md:w-1/2">
                {/* Product Card with hidden price and default buttons */}
                <ProductCard product={product} showPrice={false} pricingMode={false} />
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Ready to transform your business?</h3>
            <NavLink to="/book-demo">
               <Button variant="primary" glowColor="blue" className="!px-12 !py-4">
                 Book a Demo Now
               </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
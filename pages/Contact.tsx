import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black">
      {/* Mesh Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium">
             We're here to help you scale
          </h2>
        </div>

        {/* Contact Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-16">
            {/* Call Us Card */}
            <div className="p-8 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-purple-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white">Call Us</h3>
                </div>
                
                <div className="space-y-4">
                  <a href="tel:+18009996823" className="block text-lg font-mono text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2">
                    +1 (800) 999-NUBENTA
                  </a>
                   <a href="tel:+18001234567" className="block text-lg font-mono text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2">
                    +1 (800) 123-4567
                  </a>
                   <a href="tel:+18005550199" className="block text-lg font-mono text-slate-300 hover:text-white transition-colors">
                    +1 (800) 555-0199
                  </a>
                </div>
            </div>

            {/* Email Us Card */}
            <div className="p-8 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
               <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white">Email Us</h3>
                </div>

                <div className="space-y-4">
                  <a href="mailto:contact@nubenta.com" className="block text-lg font-mono text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2">
                    contact@nubenta.com
                  </a>
                  <a href="mailto:support@nubenta.com" className="block text-lg font-mono text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2">
                    support@nubenta.com
                  </a>
                  <a href="mailto:sales@nubenta.com" className="block text-lg font-mono text-slate-300 hover:text-white transition-colors">
                    sales@nubenta.com
                  </a>
                </div>
            </div>
        </div>

        {/* Lead Card Form */}
        <div className="w-full max-w-3xl">
           <ContactForm 
            formTitle="Send Us a Message" 
            successMessage="Message sent successfully. We will connect with you as soon as possible."
           />
        </div>

        {/* Global HQ styling element */}
        <div className="mt-16 flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm">
             <Globe className="w-4 h-4 text-slate-500" />
             <span>Global Headquarters • Silicon Valley, CA</span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import Button from './Button';
import { FormStatus } from '../types';
import { Check } from 'lucide-react';

interface ContactFormProps {
  formTitle?: string;
  successMessage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  formTitle = "Book a Live Demo",
  successMessage = "We received your application. We will connect with you as soon as possible."
}) => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormData({ name: '', businessName: '', email: '', phone: '' });
      // Removed the timeout that resets status to IDLE, so the message persists
    }, 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
      {/* Decorative gradient blob inside form */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      
      {status === FormStatus.SUCCESS ? (
        <div className="text-center py-8 animate-fade-in relative z-10">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
             <Check className="w-10 h-10 text-green-400" />
          </div>
          <h4 className="text-3xl font-bold text-white mb-4">Success!</h4>
          <p className="text-lg text-slate-300 max-w-sm mx-auto leading-relaxed">{successMessage}</p>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">{formTitle}</h3>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-slate-400 mb-1">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <Button 
              type="submit" 
              fullWidth 
              glowColor="blue"
              disabled={status === FormStatus.SUBMITTING}
              className={status === FormStatus.SUBMITTING ? 'opacity-70 cursor-not-allowed' : ''}
            >
              {status === FormStatus.SUBMITTING ? 'Processing...' : 'Submit Inquiry'}
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
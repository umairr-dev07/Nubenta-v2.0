import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  glowColor?: 'purple' | 'blue' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glowColor = 'purple', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Reduced padding from px-8 py-3 to px-6 py-2.5 and text size to text-sm
  const baseStyles = "relative px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider text-sm overflow-hidden group";
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const colors = {
    purple: {
      primary: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] border border-purple-400/30 text-white",
      secondary: "bg-slate-900 border border-purple-500/50 hover:bg-purple-900/20 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] text-white",
      outline: "bg-transparent border border-white/20 hover:border-purple-500 hover:text-purple-400 text-white"
    },
    blue: {
      primary: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] border border-blue-400/30 text-white",
      secondary: "bg-slate-900 border border-cyan-500/50 hover:bg-cyan-900/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] text-white",
      outline: "bg-transparent border border-white/20 hover:border-cyan-500 hover:text-cyan-400 text-white"
    },
    white: {
      primary: "bg-white text-black hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-transparent",
      secondary: "bg-slate-900 border border-white/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] text-white",
      outline: "bg-transparent border border-white hover:bg-white hover:text-black transition-colors text-white"
    }
  };

  const selectedColor = colors[glowColor];
  let variantStyles = selectedColor.primary;
  
  if (variant === 'secondary') variantStyles = selectedColor.secondary;
  if (variant === 'outline') variantStyles = selectedColor.outline;

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${widthClass} ${className} shadow-lg`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Shine effect overlay */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
    </button>
  );
};

export default Button;
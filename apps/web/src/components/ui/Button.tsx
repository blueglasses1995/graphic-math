import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const base = 'font-medium rounded-lg transition-colors disabled:opacity-50';
    const variants = { primary: 'bg-indigo-600 hover:bg-indigo-500 text-white', secondary: 'bg-slate-700 hover:bg-slate-600 text-white', ghost: 'bg-transparent hover:bg-slate-700 text-gray-300' };
    const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
    return <button ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
  }
);
Button.displayName = 'Button';
export default Button;

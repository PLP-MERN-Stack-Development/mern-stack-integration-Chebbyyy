function Button({ children, variant = 'primary', type = 'button', ...props }) {
  const baseClasses = 'px-5 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 scale-100 hover:scale-105';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-700',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-yellow-400 text-white hover:bg-yellow-500',
    outline: 'border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50',
    pink: 'bg-pink-500 text-white hover:bg-pink-600',
    purple: 'bg-purple-500 text-white hover:bg-purple-600',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
function Input({ label, error, ...props }) {
  return (
    <div className="mb-6 flex flex-col items-center">
      {label && (
        <label className="block text-gray-700 text-base font-semibold mb-2 self-start">
          {label}
        </label>
      )}
      <input
        className={`transition-all duration-300 shadow-lg border border-gray-300 rounded-xl w-full max-w-xl py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 ${
          error ? 'border-red-500' : ''
        }`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs italic mt-2 self-start">{error}</p>
      )}
    </div>
  );
}

export default Input;
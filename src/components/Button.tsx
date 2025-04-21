export default function Button({className = "", children}) {

  const baseClasses = "text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 font-medium rounded-md text-sm px-5 py-1.5 focus:outline-none cursor-pointer";

    return (
      <div>
        <button className={`${baseClasses} ${className}`}>
            {children}
        </button>
      </div>
    );
}
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function Button({className = "", children, ...props}: ButtonProps) {

  const baseClasses = "text-white shadow-md bg-gray-500 hover:bg-gray-700 focus:ring-4 font-medium rounded-md text-sm px-5 py-1.5 focus:outline-none cursor-pointer";

    return (
      <div>
        <button className={`${baseClasses} ${className}`} {...props}>
            {children}
        </button>
      </div>
    );
}
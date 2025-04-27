export default function TextInput({className = "", label="", ...props}) {

  const inputBaseClasses = "w-full border text-gray-700 border-slate-300 bg-transparent px-3 py-2 mt-1 shadow-md font-small rounded-md text-sm";
  const inputId = `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="my-3">
        {label && (
            <label htmlFor={inputId} className="block text-sm text-gray-700">
            {label}
            </label>
        )}

        <input id={inputId} className={`${inputBaseClasses} ${className}`} {...props}></input>
      </div>
    );
}
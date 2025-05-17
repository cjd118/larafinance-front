export default function SelectInput({className = "", label="", data, dataKey, dataValue, ...props}) {

    const inputBaseClasses = "w-full border text-gray-700 border-slate-300 bg-transparent px-3 py-2 mt-1 shadow-md font-small rounded-md text-sm";
    const inputId = `input-${Math.random().toString(36).substring(2, 9)}`;
  
      console.log(data);

      return (
        <div>
          {label && (
              <label htmlFor={inputId} className="block text-sm text-gray-700">
              {label}
              </label>
          )}
          <select id={inputId} className={`${inputBaseClasses} ${className}`} {...props}>
            <option value="">No parent</option>
            {data.map((element) => (
              <option key={element[dataKey]} value={element[dataKey]}>{element[dataValue]}</option>
            ))}
          </select>
        </div>
      );
  }
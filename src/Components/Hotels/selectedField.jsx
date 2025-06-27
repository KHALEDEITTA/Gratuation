import React from 'react';

function SelectField({ label, options, setItem, defualtvalue, icon }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-gray-700 font-medium">{label}</label>
      <div className="flex gap-2 items-center">
        {icon}
        <select
          defaultValue={defualtvalue}
          className="border-b w-full p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          onChange={(e) => setItem(e.target.value)}
        >
          {options.map((item, idx) => (
            <option key={idx} value={item.destinationName || item}>
              {item.destinationName || item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectField;

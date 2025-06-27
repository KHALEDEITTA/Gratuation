import React from 'react';

function InputField({ label, setItem, type = "text", textarea = false, placeholder ,defualtvalue}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-gray-700 font-medium">{label}</label>
      {textarea ? (
        <textarea
          onChange={(e) => setItem(e.target.value)}
          rows={4}
          className="border p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
      ) : (
        <input
          type={type}
          defaultValue={defualtvalue}
          placeholder={placeholder}
          className="border-b p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          onChange={(e) => setItem(e.target.value)}
        />
      )}
    </div>
  );
}

export default InputField;

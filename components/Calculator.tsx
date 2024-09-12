"use client"
import { useState } from "react";


const Calculator = () => {
  const [input, setInput] = useState('');
  
  const handleClick = (value:String) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === '←') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '-', 
    '0', '.', '=', '+', 
    '←'
  ];

  return (
    <div className="w-80  bg-gradient-to-br from-[#07A3B2] to-[#D9ECC7] rounded-xl shadow-lg">
      <div className=" text-white text-2xl font-semibold p-4 rounded-t-xl text-right">
        {input || '0'}
      </div>
      <div className="grid grid-cols-4 gap-3 p-4  rounded-b-xl  ">
        {buttons.map((btn) => (
          <button 
            key={btn} 
            className={`p-4 rounded ${btn === '=' ? 'col-span-2 bg-white hover:bg-[#427E93] text-black' : 'bg-white hover:bg-[#427E93]'} ${
              btn === '←' ? ' text-black' : ''
            }`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

import Container from './layouts/Container';
import { FaAngleDown, FaStar, FaCheck } from "react-icons/fa";
import { useState } from 'react';

export const AccordionItem = ({
  id,
  name,
  count,
  type = "checkbox",   
  stars = 0,            
  selected = false,
  onChange,
  groupName,
}) => {

 
  if (type === "radio") {
    return (
      <div className='flex items-center mb-2.5 gap-x-2.5'>
        <input
          className='peer hidden'
          id={id}
          type="radio"
          name={groupName}
          checked={selected}
          onChange={onChange}
        />
        <label htmlFor={id} className='w-4 h-4 rounded-full border border-[#CCCCCC] flex items-center justify-center cursor-pointer peer-checked:border-primry'>
          {selected && <span className='w-2.5 h-2.5 rounded-full bg-primry'></span>}
        </label>
        <label htmlFor={id} className='font-pop text-sm text-[#1A1A1A] cursor-pointer'>
          {name} {count && <span className='text-[#808080]'>({count})</span>}
        </label>
      </div>
    )
  }

  
  if (type === "star") {
    return (
      <div className='flex items-center  mb-2.5 gap-x-2.5'>
        <input className='hidden' id={id} type="checkbox" checked={selected} onChange={onChange} />
        <label
          htmlFor={id}
          className={`w-4 h-4 rounded flex items-center justify-center cursor-pointer border ${selected ? "bg-primry border-primry" : "border-[#CCCCCC]"}`}
        >
          {selected && <FaCheck className='text-white text-[9px]' />}
        </label>
        <label htmlFor={id} className='flex items-center gap-x-1 cursor-pointer'>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < stars ? "text-[#FFA41C]" : "text-[#E6E6E6]"} size={12} />
          ))}
          <span className='font-pop text-sm text-[#1A1A1A] ml-1'>{stars}.0 & up</span>
        </label>
      </div>
    )
  }

 
  if (type === "tag") {
    return (
      <button
        type="button"
        onClick={onChange}
        className={`font-pop  text-sm px-4 py-2 mr-2 mb-2.5 rounded-full border transition-colors ${
          selected
            ? "bg-primry text-white border-primry"
            : "border-[#E6E6E6] text-[#4D4D4D]"
        }`}
      >
        {name}
      </button>
    )
  }

  return (
    <div className='flex items-center mb-2.5 gap-x-2.5'>
      <input className='peer hidden' id={id} type="checkbox" checked={selected} onChange={onChange} />
      <label
        htmlFor={id}
        className={`w-4 h-4 rounded flex items-center justify-center cursor-pointer border ${selected ? "bg-primry border-primry" : "border-[#CCCCCC]"}`}
      >
        {selected && <FaCheck className='text-white text-[9px]' />}
      </label>
      <label htmlFor={id} className='font-pop text-sm text-[#1A1A1A] cursor-pointer'>
        {name} {count && <span className='text-[#808080]'>({count})</span>}
      </label>
    </div>
  )
}


export const PriceRange = ({ min = 50, max = 1500, value, onChange }) => {
  const percent = (v) => ((v - min) / (max - min)) * 100;

  return (
    <div className='px-1 '>
      <div className='relative  h-1 bg-[#E6E6E6] rounded-full my-6'>
        <div
          className='absolute h-1 bg-primry rounded-full'
          style={{ left: `${percent(value[0])}%`, right: `${100 - percent(value[1])}%` }}
        ></div>
        <input
          type="range" min={min} max={max} value={value[0]}
          onChange={(e) => onChange([Math.min(Number(e.target.value), value[1]), value[1]])}
          className='price-thumb absolute w-full top-1/2 -translate-y-1/2'
        />
        <input
          type="range" min={min} max={max} value={value[1]}
          onChange={(e) => onChange([value[0], Math.max(Number(e.target.value), value[0])])}
          className='price-thumb absolute w-full top-1/2 -translate-y-1/2'
        />
      </div>
      <p className='font-pop text-sm text-[#4D4D4D]'>Price: {value[0]} — {value[1]}</p>
    </div>
  )
}

const Accodion = ({ title = "All Categories", children }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <div className='mt-6 mb-5 cursor-pointer' onClick={() => setShow(!show)}>
        <h2 className='flex items-center justify-between font-pop text-[20px] font-medium'>
          {title}
          <span className={`text-[18px] transition-transform duration-300 ease-in-out ${show ? "rotate-180" : "rotate-0"}`}>
            <FaAngleDown />
          </span>
        </h2>
      </div>
      {show && <div className='w-[100%]'>{children}</div>}
    </Container>
  )
}

export default Accodion
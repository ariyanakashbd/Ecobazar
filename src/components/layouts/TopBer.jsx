import { useState, useRef } from 'react';
import Container from './Container';
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import useOutsiteClick from '../../hooks/outsideClick';
import { Link } from 'react-router-dom';

const TopBer = () => {
  let [open, setOpen] = useState(false);
  let [opentwo, setOpenTwo] = useState(false);

  let [language, setLanguage] = useState("ENG");
  let [currency, setCurrency] = useState("USD");

  const languages = ["EN", "BN", "AFG"];
  const currencies = ["USD", "BDT", "UDT"];

  const dropDownLanRef = useRef(null);
  const dropDownUsdRef = useRef(null);

  useOutsiteClick(dropDownLanRef, () => setOpen(false), open);
  useOutsiteClick(dropDownUsdRef, () => setOpenTwo(false), opentwo);

  return (
    <>
      <div className='border-b border-[#E5E5E5] font-pop text-sm text-[#666666] py-3'>
        <Container>
         
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full'>
            
          
            <div className='flex items-center gap-1.5 text-xs sm:text-sm justify-center sm:justify-start w-full sm:w-auto text-center sm:text-left'>
              <CiLocationOn className='shrink-0 text-base' />
              <span className='font-medium'>Store Location:</span>
              <span className='truncate max-w-[200px] xs:max-w-none'>Lincoln- 344, Illinois, Chicago, USA</span>
            </div>

           
            <div className='flex items-center justify-center sm:justify-end gap-4 sm:gap-6 flex-wrap w-full sm:w-auto'>

              
              <div
                onClick={() => setOpen(!open)}
                className='flex items-center gap-1 relative cursor-pointer select-none py-1'
                ref={dropDownLanRef}
              >
                <span>{language}</span> <FaAngleDown className='text-xs' />

                {open && (
                  <div className='absolute left-0 sm:left-auto sm:right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg p-1.5 z-50 min-w-[80px] rounded'>
                    <ul>
                      {languages.map((item) => (
                        <li key={item} className='text-xs sm:text-sm font-pop p-2 hover:bg-gray-100 cursor-pointer rounded'
                          onClick={() => {
                            setLanguage(item);
                            setOpen(false);
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              
              <div
                onClick={() => setOpenTwo(!opentwo)}
                ref={dropDownUsdRef}
                className='flex items-center gap-1 relative cursor-pointer select-none py-1'
              >
                <span>{currency}</span> <FaAngleDown className='text-xs' />

                {opentwo && (
                  <div className='absolute left-0 sm:left-auto sm:right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg p-1.5 z-50 min-w-[80px] rounded'>
                    <ul>
                      {currencies.map((item) => (
                        <li key={item} className='text-xs sm:text-sm font-pop p-2 hover:bg-gray-100 cursor-pointer rounded'
                          onClick={() => {
                            setCurrency(item);
                            setOpenTwo(false);
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            
              <div className='flex items-center gap-1 relative pl-0 sm:pl-4 sm:before:content-[""] sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:w-[1px] sm:before:h-[14px] sm:before:bg-[#E6E6E6]'>
                <Link to="/Login" className="hover:text-black transition-colors">Sign In</Link>
                <span>/</span>
                <Link to="/Registration" className="hover:text-black transition-colors">Sign Up</Link>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBer;
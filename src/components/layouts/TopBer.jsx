import React, { useRef, useState } from 'react';
import Container from './Container';
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import useOutsiteClick from '../../hooks/outsideClick';
import { Link } from 'react-router';

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
      <div className='border-b border-b-2 border-[#E5E5E5] font-pop text-sm text-[#666666] py-3.25'>
        <Container>
          <div className='flex justify-between cursor-pointer'>
            <div className='flex items-center gap-1'>
              <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA
            </div>

            <div className='flex gap-x-5'>

              <div
                onClick={() => setOpen(!open)}
                className='flex items-center gap-1 relative'
                ref={dropDownLanRef}
              >
                {language} <FaAngleDown />

                {open && (
                  <div className='absolute top-8.75 bg-gry p-3'>
                    <ul>
                     {languages.map((item)=>(
                        <li className='text-sm  font-pop hover:bg-[#363636] cursor-pointer'
                           onClick={ () => {
                            setLanguage(item);
                            setOpen(false);
                          }
                          }>
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
                className='flex items-center gap-1 relative'
              >
                {currency} <FaAngleDown />

                {opentwo && (
                  <div className='absolute top-8.75 bg-gry p-3 z-50'>
                    <ul>
                      {currencies.map((item) => (
                        <li className='text-sm  font-pop hover:bg-[#363636] cursor-pointer'
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
              <div className='topbar'>
                <Link to="/Login">Sing In</Link>
                <Link to="/Registration">/ Sing Up</Link>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBer;
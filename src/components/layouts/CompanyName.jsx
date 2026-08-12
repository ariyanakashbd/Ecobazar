import { useRef, useState } from 'react';
import Container from './Container';
import victor from '../../assets/Vector.webp';
import mango from '../../assets/mango-1.webp';
import Group from '../../assets/Group.webp';
import food from '../../assets/food.webp';
import bookof from '../../assets/bookof.webp';
import Group1 from '../../assets/Group1.webp';
import instagram from '../../assets/instagram.webp';
import instagram2 from '../../assets/instagram2.webp';
import instagram3 from '../../assets/instagram3.webp';
import instagram4 from '../../assets/instagram4.webp';
import instagram5 from '../../assets/instagram5.webp';
import instagram6 from '../../assets/instagram6.webp';
import useOutsiteClick from '../../hooks/outsideClick';

// Small reusable Instagram icon (SVG, no extra asset needed)
const InstagramIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
);


const InstaCard = ({ src, alt, onClick }) => (
  <div
    onClick={onClick}
    className="relative overflow-hidden rounded-2xl cursor-pointer group border-2 border-transparent hover:border-[#222124] transition-all duration-300"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-[#0F2212]/75 opacity-0 group-hover:opacity-[100%] flex items-center justify-center transition-all duration-300">
      <InstagramIcon className="w-8 h-8 text-white scale-75 group-hover:scale-100 transition-all duration-300" />
    </div>
  </div>
);

const CompanyName = () => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  const [openSix, setOpenSix] = useState(false);
  const openRef = useRef(null);
  const openRefTwo = useRef(null);
  const openRefThree = useRef(null);
  const openRefFour = useRef(null);
  const openRefFive = useRef(null);
  const openRefSix = useRef(null);
  useOutsiteClick(openRef, () => setOpen(false), open);
  useOutsiteClick(openRefTwo, () => setOpenTwo(false), openTwo);
  useOutsiteClick(openRefThree, () => setOpenThree(false), openThree);
  useOutsiteClick(openRefFour, () => setOpenFour(false), openFour);
  useOutsiteClick(openRefFive, () => setOpenFive(false), openFive);
  useOutsiteClick(openRefSix, () => setOpenSix(false), openSix);

  return (
    <>
      <Container>
        <marquee behavior="left" direction="8">
          <div className='flex justify-between items-center h-38'>
            <img src={victor} alt="victor" />
            <img src={mango} alt="mango" />
            <img src={Group} alt="Group" />
            <img src={food} alt="food" />
            <img src={bookof} alt="bookof" />
            <img src={Group1} alt="Group1" />
          </div>
        </marquee>

        <div className='hidden lg:block'>
          <h2 className='text-[32px] font-pop font-semibold text-[#1A1A1A] text-center mb-8'>
            Follow us on Instagram
          </h2>
          <div className='flex justify-between gap-4'>
            <InstaCard src={instagram} alt="instagram" onClick={() => setOpen(true)} />
            <InstaCard src={instagram6} alt="instagram6" onClick={() => setOpenTwo(true)} />
            <InstaCard src={instagram3} alt="instagram3" onClick={() => setOpenThree(true)} />
            <InstaCard src={instagram4} alt="instagram4" onClick={() => setOpenFour(true)} />
            <InstaCard src={instagram5} alt="instagram5" onClick={() => setOpenFive(true)} />
            <InstaCard src={instagram6} alt="instagram6" onClick={() => setOpenSix(true)} />
          </div>
        </div>
      </Container>

      {open && (
        <div ref={openRef} onClick={() => setOpen(false)} className="w-full h-screen fixed top-0 left-0 bg-[#0000007e] z-50 flex justify-center items-center">
          <div onClick={() => setOpen(true)} className="flex flex-col items-center gap-4">
            <img src={instagram} alt="instagram" className="w-150 h-150" />
            <button onClick={() => setOpen(false)} className="text-white bg-black py-3 px-4">Close</button>
          </div>
        </div>
      )}

      {openTwo && (
        <div ref={openRefTwo} onClick={() => setOpenTwo(false)} className="w-full h-screen fixed top-0 left-0 bg-[#0000007e] z-50 flex justify-center items-center">
          <div onClick={() => setOpenTwo(true)} className="flex flex-col items-center gap-4">
            <img src={instagram2} alt="instagram2" className="w-150 h-150" />
            <button onClick={() => setOpenTwo(false)} className="text-white bg-black py-3 px-4">Close</button>
          </div>
        </div>
      )}

      {openThree && (
        <div ref={openRefThree} onClick={() => setOpenThree(false)} className="w-full h-screen fixed top-0 left-0 bg-[#0000007e] z-50 flex justify-center items-center">
          <div onClick={() => setOpenThree(true)} className="flex flex-col items-center gap-4">
            <img src={instagram3} alt="instagram3" className="w-150 h-150" />
            <button onClick={() => setOpenThree(false)} className="text-white bg-black py-3 px-4">Close</button>
          </div>
        </div>
      )}

      {openFour && (
        <div ref={openRefFour} onClick={() => setOpenFour(false)} className="w-full h-screen fixed top-0 left-0 bg-[#0000007e] z-50 flex justify-center items-center">
          <div onClick={() => setOpenFour(true)} className="flex flex-col items-center gap-4">
            <img src={instagram4} alt="instagram4" className="w-150 h-150" />
            <button onClick={() => setOpenFour(false)} className="text-white bg-black py-3 px-4">Close</button>
          </div>
        </div>
      )}

      {openFive && (
        <div ref={openRefFive} onClick={() => setOpenFive(false)} className="w-full h-screen fixed top-0 left-0 bg-[#0000007e] z-50 flex justify-center items-center">
          <div onClick={() => setOpenFive(true)} className="flex flex-col items-center gap-4">
            <img src={instagram5} alt="instagram5" className="w-150 h-150" />
            <button onClick={() => setOpenFive(false)} className="text-white bg-black py-3 px-4">Close</button>
          </div>
        </div>
      )}

      {openSix && (
        <div ref={openRefSix} onClick={() => setOpenSix(false)} className="w-full h-screen fixed top-0 left-0 bg-[#0000007e] z-50 flex justify-center items-center">
          <div onClick={() => setOpenSix(true)} className="flex flex-col items-center gap-4">
            <img src={instagram6} alt="instagram6" className="w-150 h-150" />
            <button onClick={() => setOpenSix(false)} className="text-white bg-black py-3 px-4">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyName;
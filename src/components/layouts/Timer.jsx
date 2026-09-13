import Container from './Container';
import timer from '../../assets/timer.webp';
import timerTwo from '../../assets/timer3.webp';
import timerThree from '../../assets/timer2.webp';
import {useEffect, useState} from 'react';

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <Container>
     
      <div className='flex flex-col lg:flex-row justify-between items-center mt-15 gap-6 px-4 lg:px-0'>
        
        <div className='relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none lg:w-[32%] flex justify-center mx-auto'>
          <img src={timer} alt="timer" className="w-full h-auto object-cover rounded-lg" />

          <div className="flex gap-4 xs:gap-5 sm:gap-6 lg:gap-4 absolute top-[36%] sm:top-[38%] lg:top-[23%] left-1/2 -translate-x-1/2 text-[#ffffff] font-pop text-center">
            <div className="w-[45px] sm:w-[55px] lg:w-[50px]">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold">{pad(time.days)}</h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider opacity-90">Days</p>
            </div>

            <div className="w-[45px] sm:w-[55px] lg:w-[50px]">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold">{pad(time.hours)}</h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider opacity-90">Hours</p>
            </div>

            <div className="w-[45px] sm:w-[55px] lg:w-[50px]">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold">{pad(time.minutes)}</h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider opacity-90">Mins</p>
            </div>

            <div className="w-[45px] sm:w-[55px] lg:w-[50px]">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold">{pad(time.seconds)}</h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider opacity-90">Secs</p>
            </div>
          </div>
        </div>
        <div className='hidden lg:block lg:w-[32%]'>
          <img src={timerTwo} alt="timerTwo" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className='hidden lg:block lg:w-[32%]'>
          <img src={timerThree} alt="timerThree" className="w-full h-auto object-cover rounded-lg" />
        </div>

      </div>
    </Container>
  );
};

export default Timer;
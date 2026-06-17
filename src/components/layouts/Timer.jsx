import Container from './Container';
import timer from '../../assets/timer.webp';
import timerTwo from '../../assets/timer3.webp';
import timerThree from '../../assets/timer2.webp';
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const targetTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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
      <div className='flex justify-between mt-15'>
        
        <div className='relative'>
          <img src={timer} alt="timer" />

          <div className="flex gap-5 absolute top-30 left-1/2 -translate-x-1/2 text-[#ffffff] font-pop">
            
            <div>
              <h3 className="text-2xl font-bold">{pad(time.days)}</h3>
              <p className="text-xs">Days</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">{pad(time.hours)}</h3>
              <p className="text-xs">Hours</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">{pad(time.minutes)}</h3>
              <p className="text-xs">Mins</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">{pad(time.seconds)}</h3>
              <p className="text-xs">Secs</p>
            </div>

          </div>
        </div>

        <div>
          <img src={timerTwo} alt="timerTwo" />
        </div>

        <div>
          <img src={timerThree} alt="timerThree" />
        </div>

      </div>
    </Container>
  );
};

export default Timer;
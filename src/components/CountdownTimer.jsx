import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(6 * 24 * 60 * 60); // 6 days in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="flex gap-2 md:gap-4 justify-center text-white ">
      <div className="text-center  bg-white px-3 py-3 rounded-full text-black flex flex-col items-center justify-center">
        <h1 className="text-md">{hours}</h1>
        <p>Hours</p>
      </div>
      <div className="text-center bg-white px-4 py-3 rounded-full text-black  flex flex-col items-center justify-center">
        <h1 className="text-md">{days}</h1>
        <p>Days</p>
      </div>
      <div className="text-center bg-white px-4 py-3 rounded-full  text-black  flex flex-col items-center justify-center">
        <h1 className="text-md">{minutes}</h1>
        <p>Mins</p>
      </div>
      <div className="text-center bg-white px-4 py-3 rounded-full text-black flex flex-col items-center justify-center">
        <h1 className="text-md">{secs}</h1>
        <p>Secs</p>
      </div>
    </div>
  );
};

export default CountdownTimer;

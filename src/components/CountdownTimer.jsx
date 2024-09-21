import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4">
    {Object.keys(timeLeft).length > 0 ? (
      Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <span className="text-2xl font-bold text-gray-800 text-center">
            {value}
          </span>
          <p className="text-center text-gray-600 capitalize">{unit}</p>
        </div>
      ))
    ) : (
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-gray-800 text-center">
          Ya empezó 
        </span>
      </div>
    )}
  </div>
  );
};

export default CountdownTimer;

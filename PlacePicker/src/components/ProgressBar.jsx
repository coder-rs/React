import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [remainingTime, setRemainingTime] = useState(timer);
  return <progress value={remainingTime} max={timer} />;
}

import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("SET TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearInterval(timer);
    };
  }, [onTimeout]);
  useEffect(() => {
    console.log("SET INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}

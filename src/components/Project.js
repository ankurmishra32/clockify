import { useState, useEffect } from "react";

export default function Project({ project, showTime, addTime }) {
  const [time, setTime] = useState(project.time);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (time) => {
    let [hh, mm, ss] = time.split(":");
    if (ss > 59) {
      mm++;
      ss -= 60;
    }
    if (mm > 59) {
      hh++;
      mm -= 60;
    }
    return `${hh}:${mm}:${ss}`;
  };
  useEffect(() => {
    const incrementTimer = () => {
      let [hh, mm, ss] = time.split(":");
      setTime(formatTime(`${hh}:${mm}:${Number(ss) + 1}`));
    };
    let timer;
    if (isRunning) {
      timer = setTimeout(() => {
        incrementTimer();
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isRunning, time]);
  return (
    <>
      <div>{project.name}</div>
      {showTime && (
        <>
          <div>{time}</div>
          <button
            onClick={() => {
              setIsRunning(!isRunning);
              if (!isRunning) {
                addTime(time);
              }
            }}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
        </>
      )}
    </>
  );
}

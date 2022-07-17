import {useState, useEffect} from 'react'

export default function Project({project, showTime, addTime}) {
    const [time, setTime] = useState(project.time);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const incrementTimer = () => {
            let [hh, mm, ss] = time.split(":");
            ss++;
            if(ss > 59) {
                mm++;
                ss = "00";
            }
            if(mm > 59) {
                hh++;
                mm = "00";
            }
            setTime(`${hh}:${mm}:${ss}`);
        }
        let timer;
        if(isRunning) {
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
        {showTime && <>
            <div>{time}</div>
            <button onClick={() => {
                setIsRunning(!isRunning);
                if(!isRunning) {
                    addTime(time);
                }
                }}>{isRunning ? "Stop": "Start"}</button>
        </>}
    </>
  )
}

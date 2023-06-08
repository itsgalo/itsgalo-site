import { useState, useEffect } from "react";
import styles from '../styles/Navbar.module.css';

function Clock() {

    const [time, setTime] = useState("");

    function refreshClock() {
        let date = new Date();
        let h = date.getHours(); // 0 - 23
        let m = date.getMinutes(); // 0 - 59
        let s = date.getSeconds(); // 0 - 59
        let session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        let time = h + ":" + m + ":" + s + " " + session;
        setTime(time);
      }

    useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
        clearInterval(timerId);
    };
    }, [time]);
    
    return (
        <h1 className={styles.clock}>{time.toString()}</h1>
    )

}

export default Clock;
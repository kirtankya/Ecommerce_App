import React, { useState, useEffect } from "react";
import "./banner.scss";
import jbl from "../../../assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";

export default function Banner() {
  const [days, setDays] = useState(23);
  const [hours, setHours] = useState(5);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(35);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setMinutes((prevMinutes) => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else {
              setHours((prevHours) => {
                if (prevHours > 0) {
                  return prevHours - 1;
                } else {
                  setDays((prevDays) => {
                    if (prevDays > 0) {
                      return prevDays - 1;
                    } else {
                      clearInterval(countdownInterval);
                      return 0;
                    }
                  });
                  return 23;
                }
              });
              return 59;
            }
          });
          return 59;
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="container">
      <div className="banner_main">
        <div className="banner_text">
          <p>Categories</p>
          <h2>Enhance Your Music Experience</h2>
          <div className="banner_timer">
            <div className="banner_day">
              <h2>{days}</h2>
              <span>Days</span>
            </div>
            <div className="banner_hours">
              <h2>{hours}</h2>
              <span>Hours</span>
            </div>
            <div className="banner_minute">
              <h2>{minutes}</h2>
              <span>Minutes</span>
            </div>
            <div className="banner_second">
              <h2>{seconds}</h2>
              <span>Seconds</span>
            </div>
          </div>
          <div className="banner_button">
            <button>Buy Now</button>
          </div>
        </div>
        <div className="banner_image">
          <img className="img-fluid" src={jbl} alt="" />
        </div>
      </div>
    </div>
  );
}

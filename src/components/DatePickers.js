import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [timeOfEachDay, setTimeOfEachDay] = useState([]);
  const timesRef = useRef();
  const isWeekday = (date) => {
    const day = date.getDay();

    return day !== 0 && day !== 6 && day !== 2 && day !== 4;
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!time) return;
    let dateTime = startDate.toString().split(" ");
    dateTime.splice(4, 1, time);
    let final_dateTime = dateTime.join(" ");
    console.log(final_dateTime);
  };

  const converTimeFormat = (time) => {
    let hour = time.split(":")[0];
    let minutes = time.split(":")[1];
    let amOrPm;
    if (hour > 12) {
      hour = hour - 12;
      amOrPm = "PM";
    } else if (hour == 12) {
      amOrPm = "PM";
    } else {
      amOrPm = "AM";
    }
    time = `${hour}:${minutes} ${amOrPm}`;
    return time;
  };
  useEffect(() => {
    let day = startDate.getDay();
    switch (day) {
      case 1:
        setTimeOfEachDay(["13:00", "14:00", "16:00"]);
        break;
      case 3:
        setTimeOfEachDay(["10:00", "12:00", "14:00", "16:00"]);
        break;
      case 5:
        setTimeOfEachDay(["13:00", "14:00", "16:00"]);
        break;
      default:
        setTimeOfEachDay(null);
    }
  }, [startDate]);

  const handleMove = (dir) => {
    if (timeOfEachDay.length === 3) return;

    if (dir === "left") {
      timesRef.current.style.transform = `translateX(0px)`;
    }
    if (dir === "right") {
      timesRef.current.style.transform = `translateX(-55px)`;
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleForm}>
        <div className="date">
          <DatePicker
            filterDate={isWeekday}
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setTime("");
              timesRef.current.style.transform = `translateX(0px)`;
            }}
            inline
          />
        </div>
        <div className="outter">
          <AiOutlineLeft
            className="control left"
            onClick={() => handleMove("left")}
          />
          <div
            className={
              timeOfEachDay.length === 3
                ? "times-container center"
                : "times-container"
            }
          >
            <div className="times" ref={timesRef}>
              {timeOfEachDay &&
                timeOfEachDay.map((time, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      className="time"
                      onClick={() => setTime(time)}
                    >
                      {converTimeFormat(time)}
                    </button>
                  );
                })}
            </div>
          </div>
          <AiOutlineRight
            className="control right"
            onClick={() => handleMove("right")}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

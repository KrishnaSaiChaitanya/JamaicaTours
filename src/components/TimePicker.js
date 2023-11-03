import React, { useState } from "react";
import Calender from "./Calender";

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState("Hour");
  const [selectedMinute, setSelectedMinute] = useState("Min");
  const [selectedAmPm, setSelectedAmPm] = useState("When");

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 13 }, (_, i) =>
    (i * 5).toString().padStart(2, "0")
  );

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
  };

  const handleMinuteChange = (e) => {
    setSelectedMinute(e.target.value);
  };

  const handleAmPmChange = (e) => {
    setSelectedAmPm(e.target.value);
  };

  const displayTime = `${selectedHour}:${selectedMinute} ${selectedAmPm}`;
  const isAllSelected =
    selectedHour !== "Hour" &&
    selectedMinute !== "Min" &&
    selectedAmPm !== "When";

  return (
    <div>
      <div className="row justify-content-center" style={{ padding: "100px" }}>
        <Calender />
      </div>
      <div className="row justify-content-center m-5 ">
        <div className="col-3"></div>
        <div className="col-6 row">
          <div className="col-4 d-flex">
            <select
              value={selectedHour}
              onChange={handleHourChange}
              style={{
                border: "1px solid blue",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
              className="form-input"
            >
              <option value="Hour" disabled>
                Hour
              </option>
              {hours.map((hour) => (
                <option
                  key={hour}
                  value={hour}
                  style={{ backgroundColor: "transparent" }}
                >
                  {hour}
                </option>
              ))}
            </select>
            <span
              className="pl-5"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "30px",
              }}
            >
              :
            </span>
          </div>
          <div className="col-4 d-flex">
            <select
              value={selectedMinute}
              onChange={handleMinuteChange}
              className="form-input"
              style={{
                border: "1px solid blue",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              <option value="Min" disabled>
                Min
              </option>
              {minutes.map((minute) => (
                <option
                  key={minute}
                  value={minute}
                  style={{ background: "transparent" }}
                >
                  {minute}
                </option>
              ))}
            </select>
            <span
              className="pl-5"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "30px",
              }}
            >
              :
            </span>
          </div>
          <div className="col-4 d-flex">
            <select
              style={{
                border: "1px solid blue",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
              value={selectedAmPm}
              onChange={handleAmPmChange}
              className="form-control"
            >
              <option value="When" disabled>
                When
              </option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
            <span
              className="pl-5"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "30px",
              }}
            ></span>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      {isAllSelected && <h5 className="text-center">{displayTime}</h5>}
    </div>
  );
};

export default TimePicker;

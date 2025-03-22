import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"; // Import CSS for styling

function DateTimeRangePicker() {
  const [fromDateTime, setFromDateTime] = useState(null);
  const [toDateTime, setToDateTime] = useState(null);
  const [error, setError] = useState("");

  // Handle change for "From" DateTime
  const handleFromDateTimeChange = (date) => {
    setFromDateTime(date);
    setError("");
  };

  // Handle change for "To" DateTime
  const handleToDateTimeChange = (date) => {
    setToDateTime(date);
    setError("");
  };

  // Handle "Generate" button click
  const handleGenerate = () => {
    // Validate that both From and To DateTimes are selected
    if (!fromDateTime || !toDateTime) {
      setError("Both From and To Date and Time must be selected!");
    } else if (fromDateTime.isAfter(toDateTime)) {
      setError("From DateTime cannot be after To DateTime!");
    } else {
      setError("");
      alert(
        `From: ${fromDateTime.format(
          "MMMM D, YYYY h:mm A"
        )} \nTo: ${toDateTime.format("MMMM D, YYYY h:mm A")}`
      );
    }
  };

  // Handle "Reset" button click
  const handleReset = () => {
    setFromDateTime(null);
    setToDateTime(null);
    setError("");
  };

  return (
    <div>
      <h2>Select Date and Time Range</h2>

      {/* From DateTime Picker */}
      <div>
        <label>From:</label>
        <Datetime
          value={fromDateTime}
          onChange={handleFromDateTimeChange}
          dateFormat="MMMM D, YYYY"
          timeFormat="h:mm A"
          closeOnSelect
        />
      </div>

      {/* To DateTime Picker */}
      <div>
        <label>To:</label>
        <Datetime
          value={toDateTime}
          onChange={handleToDateTimeChange}
          dateFormat="MMMM D, YYYY"
          timeFormat="h:mm A"
          closeOnSelect
        />
      </div>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Buttons */}
      <div>
        <button onClick={handleGenerate}>Generate</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default DateTimeRangePicker;

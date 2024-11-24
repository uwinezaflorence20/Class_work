import React from "react";

const CurrentDate = () => {
  const today = new Date().toLocaleDateString();
  return <p>Today's date is: {today}</p>;
};

export default CurrentDate;

// import React from "react";

// const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   return (
//     <select
//       value={selectedMonth}
//       onChange={(e) => setSelectedMonth(e.target.value)}
//     >
//       {months.map((month, index) => (
//         <option key={index} value={index + 1}>
//           {month}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default MonthSelector;



// src/components/MonthSelector.js
import React from 'react';
import './MonthSelector.css';

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <select
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
      className="month-selector"
    >
      {months.map((month, index) => (
        <option key={index} value={index + 1}>{month}</option>
      ))}
    </select>
  );
};

export default MonthSelector;

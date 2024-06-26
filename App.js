// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import MonthSelector from "./components/MonthSelector";
// import SearchBox from "./components/SearchBox";
// import TransactionsTable from "./components/TransactionsTable";
// import Pagination from "./components/Pagination";

// const App = () => {
//   const [selectedMonth, setSelectedMonth] = useState(3); 
//   const [searchQuery, setSearchQuery] = useState("");
//   const [transactions, setTransactions] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchTransactions();
//   }, [selectedMonth, searchQuery, currentPage]);

//   const fetchTransactions = async () => {
//     try {
//       const response = await axios.get("/api/transactions", {
//         params: {
//           month: selectedMonth,
//           search: searchQuery,
//           page: currentPage,
//         },
//       });
//       setTransactions(response.data.transactions);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error("Error fetching transactions", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Transactions Dashboard</h1>
//       <MonthSelector
//         selectedMonth={selectedMonth}
//         setSelectedMonth={setSelectedMonth}
//       />
//       <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <TransactionsTable transactions={transactions} />
//       <Pagination
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         totalPages={totalPages}
//       />
//     </div>
//   );
// };

// export default App;


// src/App.js
import React from 'react';
import './App.css';
import TransactionDashboard from './components/TransactionDashboard';

function App() {
  return (
    <div className="App">
      <TransactionDashboard />
    </div>
  );
}

export default App;

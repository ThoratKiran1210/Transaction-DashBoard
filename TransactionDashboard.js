import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransactionDashboard.css";

// Define the SearchBox component
const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search transaction"
      className="search-box"
    />
  );
};

// Define the MonthSelector component
const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <select
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(Number(e.target.value))}
      className="month-selector"
    >
      {months.map((month, index) => (
        <option key={index} value={index + 1}>
          {month}
        </option>
      ))}
    </select>
  );
};

// Define the TransactionsTable component
const TransactionsTable = ({ transactions }) => {
  return (
    <div className="table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold ? "Yes" : "No"}</td>
              <td>
                <img
                  src={transaction.image}
                  alt={transaction.title}
                  width="50"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Define the Pagination component
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page No: {currentPage}</span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

// Define the main TransactionDashboard component
const TransactionDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/transactions",
          {
            params: {
              month: selectedMonth,
              search: searchQuery,
              page: currentPage,
              perPage: 10,
            },
          }
        );
        setTransactions(response.data.transactions);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [searchQuery, selectedMonth, currentPage]);

  return (
    <div className="transaction-dashboard">
      <h1>Transaction Dashboard</h1>
      <div className="controls">
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <MonthSelector
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </div>
      <TransactionsTable transactions={transactions} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default TransactionDashboard;

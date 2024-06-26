import React{useState, useEffect} from 'react';

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

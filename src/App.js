import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import PayPalTransactions from "./PayPalTransactions";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>

      <Header />
    <div className="container">
      <SearchBar />
      <h3>Filter by</h3>
      <div className="d-flex my-3">

      <button className="button-18 active">Date: Last 90 Days</button>
      <button className="button-18">Type</button>
      <button className="button-18">Status</button>



      </div>
      <h3>Completed</h3>
        <PayPalTransactions />
      </div>
      <div>
    </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import './App.css'
import "./component/Container"
// import Container from "./component/Container"; 
import "./component/Testcounter"
// import TestCounter from "./component/Testcounter";
// import TestCounterTwo from "./component/Testcountertwo";
import { useRef } from "react"
// import Container from "./component/Container";
// import QuotesTable from "./component/QuotesTable";
// import useFetchQuotes from "./hooks/useFetchQuotes";
// import { current } from '@reduxjs/toolkit';

// import Container from "./component/Container";
// import QuotesTable from "./component/QuotesTable";
import useFetchQuotes from "./hooks/useFetchQuotes";





function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [limit, setLimit] = useState(5)
  const TestCounter = useState();

  async function fetchQouteDataAPI() {
    let apiUrl = `https://dummyjson.com/quotes?limit=${limit}`;
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log("data is: ", data.quotes);
      setQuoteList(data.quotes);
    } catch (error) {
      alert(error.message);
    }
  }
  function handleLoadMoreData() {
    setLimit((prev) => prev + 5);
  }
  useEffect(() => {
    fetchQouteDataAPI();
  }, [limit]);
  console.log("limit is", limit);

  //fetchQoutes

  const { filter, handleIncrementLimit, handleQuoteFilter } = useFetchQuotes();
  const filterValueRef = useRef();












  return (
    <>
      {/* start */}
      <button onClick={handleIncrementLimit}>Load more</button>
      <h1>Quotes List</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",


        }}
      >
        <input
          ref={filterValueRef}
          style={{ padding: "10px", borderRadius: "10px", margin: "20px" }}
          placeholder='search quote by quote or author name'

        />
        <button onClick={() => handleQuoteFilter(filterValueRef.current.value)}
        >Search quote</button>
        <button onClick={() => {
          handleQuoteFilter("");
          filterValueRef.current.value = "";
        }}>Reset filter

        </button>

      </div>
      <div>
        {filter?.map((quote, quoteIdx) => (
          <QuoteDisplayTile
            key={quoteIdx}
            id={quote.id}
            author={quote.author}
            quote={quote.quote}
          />
        ))}


      </div>




      {/* end */}
      {/* <TestCounter/> */}
      {/* <TestCounterTwo/> */}
      {/* <h1>Qoutes List</h1>
      <div>
        {
          quoteList.map((qoute, qouteIdx) => (
            <QouteDisplayTile
              key={qouteIdx}
              id={qoute.id}
              author={qoute.author}
              quote={qoute.quote}

            />
          ))
        }
      </div>
      <button onClick={handleLoadMoreData} style={{ display: "block", marginLeft: "auto" }}>LoadMore</button>
      {/* <Container/> */}

    </>
  )
}
export default App;
function QuoteDisplayTile({
  id = 1,
  quote = "no quote is provided",
  author = "none",
}) {
  return (
    <div style={{
      border: "1px solid black",
      backgroundColor: "slategray",
      borderRadius: " 8px",
      padding: "15px",
    }}
    >
      <p>
        <strong>{id}</strong>
        {quote}
      </p>
      <span style={{
        float: "right", transform: "translateY(-10px)"
      }}>
        ~{author}
      </span>

    </div>
  );
}



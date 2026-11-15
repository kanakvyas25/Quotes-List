import { useEffect, useState } from "react";
import { dataPerPage } from "../constants/constantData";

function useFetchQuotes(initialValue, initialLimit) {
    const [quote, setSampleData] = useState(
        Array.isArray(initialValue) ? initialValue : [],
    );
    const [filter, setFilter] = useState(quote);
    const [limit, setLimit] = useState(initialLimit || 5)


    async function fetchQuoteDataAPI() {
        let apiUrl = `https://dummyjson.com/quotes?limit=${limit}`;
        try {
            let response = await fetch(apiUrl);
            let data = await response.json();
            console.log("data is :", data.quotes);
            setSampleData(data.quotes);
            setFilter(data.quotes)

        } catch (error) {
            alert(error.massage)

        }

    }
    function handleIncrementLimit() {
        setLimit((prev) => prev + dataPerPage)
    }
    function handleQuoteFilter(searchvalue) {
        searchvalue = searchvalue.toLowerCase();
        console.log(searchvalue);
        let filterQuotes = quote.filter(
            (item) =>
                item.quote.toLowerCase().includes(searchvalue) ||
                item.author.toLowerCase().includes(searchvalue),
        );
        console.log("filtered Quote =>", filterQuotes);
        setFilter(filterQuotes)

    }

    useEffect(() => {
        fetchQuoteDataAPI();
    }, [limit]);

    console.log("filter string is", filter);

    return {
        QuoteList: quote,
        filter,
        setSampleData,
        handleIncrementLimit,
        handleQuoteFilter,



    }



};
export default useFetchQuotes;
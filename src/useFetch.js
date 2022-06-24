import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')
    
    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error("Could not fetch the data")
            }
            return res.json();
            })
            .then((data) => {
                setData(data)
                setIsLoading(false)
                setError('');
            })
            .catch(err => {
                console.log(err);
                if(err.name == "AbortError"){
                    console.log("Fetch Aborted");
                }else{
                    setIsLoading(false)
                    setError(err.message);
                }
        })

        // Aborts the fetch if the new page is loaded or the page is realoaded
        return () => abortCont.abort();

	},[url])

    return {data, isLoading, error}

}

export default useFetch;
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface FetchData {
    url: string
}

function useFetch({ url } : FetchData) {

    const { data , isLoading , error, isError } = useQuery( ["useFetch"], async () => {
        const { data } = await axios.get( url );
        return data;
    },{
        refetchOnWindowFocus: false,
    }); 

    return { data, isLoading, error , isError };
}

export default useFetch;
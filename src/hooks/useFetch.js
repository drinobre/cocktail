import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    async function fetchApi() {
      try {
        const response = await fetch(`${url}`);
        const dataResponse = await response.json();
        setData(dataResponse);
        setError(null);

        console.log(dataResponse);
        console.log(data);
      } catch (error) {
        setError(error);
        setData(null);
        console.log("Error fetching");
      }
    }

    fetchApi();
  }, [url]);

  return { data, error };
}

import { React, useEffect, useState } from "react";

// export default function useFetch(url) {
//   // let url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`; // url to be fetch

//   const [apiData, setApiData] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         const response = await fetch(`${url}`);
//         const data = await response.json();
//         setApiData(data);
//         // setError(null);

//         console.log(data);
//         console.log(apiData);
//       } catch (error) {
//         setError(error);
//         // setApiData(null);
//         console.log("Error fetching");
//       }
//     };

//     fetchApi();
//   }, [url]);

//   return { apiData, error };
// }

export default function useFetch(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }
    fetch(`${url}`, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setData(null);
      });
  }, [url]);

  return { data, error }; // you can return an object or array
}

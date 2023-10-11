import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  // const { data, isLoading, error } = useAxios('/api/products');

  // console.log(import.meta.env.VITE_DB_URL);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {

    const getData = setTimeout(async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/products?search=${search}`);
        setData(response.data);
        setError(false)
        setIsLoading(false);
      } catch (error) {

        setError(true);
      }
    } , 1000)

    return ()=>  clearTimeout(getData);

  }, [search])



  // Debouncing Concept

  // useEffect(() => {

  //   debounce(500);
  //   // getData();

  // }, [search])


  // if (isLoading) return <h1> Loading ..</h1>

  // if (error) return <h1> Error </h1>

  return (
    <>

      <h1>Products Count : {data.length}</h1>
      {isLoading && <h1> Loading ..</h1>}
      {error && <h1> Error </h1>}

      <input
        type="text"
        placeholder='Search Product'
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  )
}

export default App

// function useAxios(pathUrl) {

//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {

//     ; (
//       async () => {
//         try {
//           setIsLoading(true);
//           const response = await axios.get(pathUrl);
//           setData(response.data);
//           setError(false)
//           setIsLoading(false);
//         } catch (error) {
//           setIsLoading(false)
//           setError(true);
//         }
//       }
//     )()



//   }, [])

//   return { data, isLoading, error };

// }
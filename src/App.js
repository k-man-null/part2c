import react,{ useState, useEffect } from 'react'
import axios from 'axios'


// const ToBeRendered = (results)=> {
//   console.log("Yeeeeeeee", results)
//     if(results.length > 10) {
//       return(<div>"Too many matches specify the search"</div>)
//     }else if(results.length > 1 && results.length < 10){
//       return(<div>
//         <ul>
//           {results.map(result => <li>{result.name}</li>)}
//         </ul>
//         )
//         </div>)} 
//     else if(results.length === 1){
//       return(<ul>
//         <li>{results.name}</li>
//       </ul>) 
//     }else {
//       return(<div>No countries</div>)
//     }
//   }

const App = () => {

  const [countries, setCountries] = useState([])
  const [ results, setResults] = useState([])
  const [ querry, setQuerry ] = useState()


  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  const handleQuerry = (event) => {
    event.preventDefault()
    setQuerry(event.target.value)
    setResults(countries.filter(cNames => cNames.name.includes(querry)))
  }

  // const filterQuerry = (querry) => {
  //   console.log("Querry",querry)
  //   console.log("Couyacgagfjhagahhbflav",countries)
  //   setResults(countries.filter(countryNames => countryNames.name.toLowerCase().includes(querry)) || [])
  // }

  return (
    <div>
       <div>{querry}</div>
    <div>
      find countries<input 
      onKeyUp={handleQuerry}/>
    </div>
    {/* <ToBeRendered results={results}/> */}
    <ul>
      {results.map( result => <li key={result.id}>{result.name}</li>)}
    </ul> 

    </div>
)
  
};
  
export default App;

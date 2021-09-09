import react, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [ results, setResults] = useState([])
  const [ querry, setQuerry ] = useState()
  const [ regex, setRegex ] = useState()

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
    setRegex(new RegExp(`${querry}`, 'i'))
    filterQuerry(querry)
  }

  const filterQuerry = (querry) => {
    
    //console.log(countries)
    setResults(countries.filter(country => country.name.match(regex)) || [])
  }
  // console.log(countries[0]?.name)

  const toBeRendered = ()=> {
      if(results.length > 10) {
        return "Too many matches specify the search"
      }else if(results.length > 1 && results.length < 10){
        return results.map(country => <li>{country.name}</li>)
      }else if(results.length == 1){
        return <li>{results.name}</li>
      }
  }
  return (
      <div>
         <div>{querry}</div>
      <div>
        find countries<input 
        onChange={handleQuerry}/>
      </div>
      <div>
        <ul>
          {toBeRendered}
        </ul>
       
      </div>
      </div>
  )
}

export default App;

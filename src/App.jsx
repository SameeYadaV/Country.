import { useEffect, useState } from 'react'
import Header from './component/Header'
import SearchSection from './component/SearchSection'
import CountryList from './component/CountryList'

function App() {
  const [user, setuser] = useState([])
  const[search,setsearch]=useState("")

  const fetchingdata= async()=>{
    let response= await fetch("https://restcountries.com/v3.1/all")
    let data=await response.json();
    setuser(data)
  }
  useEffect(()=>{
    fetchingdata();
  },[])

  const SearchFilter=user.filter(country=>country.name.common.toLowerCase().includes(search.toLowerCase()))
  
  const filterRegion= async(regionName)=>{
    let response= await fetch(`https://restcountries.com/v3.1/region/${regionName}`)
    let data=await response.json();
    setuser(data)
  }
  return (
    <>
    <Header/>
   <SearchSection setsearch={setsearch} />
    <CountryList user={SearchFilter} />
    </>  
  )
}

export default App

import React from 'react'
import { useGlobalContext } from '../Context'
import Search from '../Components/Search'
import CocktailsItems from '../Components/CocktailsItems'
import Loading from "../Components/Loading";

const Home = () => {

  const {cocktails,loading} = useGlobalContext()

  if (loading) {
    return (
      <main className={"cocktails-page"}>
      <Search></Search>
   <Loading></Loading>
 
      </main>
    )
  }
  return (
   <main className={"cocktails-page"}>
  <Search></Search>
  <CocktailsItems/>


   </main>
  )
}

export default Home

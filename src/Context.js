import { useEffect, useState } from "react"
import { createContext } from "react"
import React from "react"
import { useContext } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppContext = React.createContext()



const AppProvider = ({children})=>{
const [cocktails,setCocktails] = useState([])
const [loading,setLoading] = useState(false)
const [inputValue,setInputValue] = useState("")

const fetchData = async ()=>{
    try{
        
setLoading(true)
const response = await fetch(`${url}${inputValue}`)
const conResponse = await response.json()
const {drinks} = conResponse
setLoading(false)
if (!drinks) {
    setCocktails([])
    return
}    
setCocktails(drinks)
}

catch(err){
  
    console.log(err);
    setLoading(false)
}

}

  useEffect(()=>{
const turnInputLower = inputValue.toLowerCase()
const filterItem = cocktails.filter(item => {
    const smallLetter = item.strGlass.toLowerCase()
    if (smallLetter.includes(turnInputLower)) {
        return item
    }

}
)
setCocktails(filterItem) 

  },[inputValue])

useEffect(()=>{
fetchData()
},[])
useEffect(()=>{
fetchData()
},[inputValue])

    return (
        <AppContext.Provider value={{
cocktails,
loading,
inputValue,
setInputValue
        }}>
{children}

        </AppContext.Provider>
    )

}


const useGlobalContext = ()=>{
return useContext(AppContext)
}

export {useGlobalContext,AppProvider}
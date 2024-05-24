import React from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../Context'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'

const InfoPage = () => {
        const {cocktails,loading} = useGlobalContext()
        const {infoId} = useParams()
     if (loading) {
        return <>
            <Loading></Loading>
        </>
        }

    const findItem = cocktails.find(item => item.idDrink === infoId)
    const {idDrink,
            strAlcoholic,
            strCategory,
            strCreativeCommonsConfirmed,
            strDrink,
            strDrinkThumb,
            strGlass,
        strInstructions,
        strIngredient1
        } = findItem

       
  return (
    <main className='info-page'>
     <section className='first-container'>
<Link to={'/'}>Back to home</Link>
<h1 className='name-header'>{strDrink}</h1>
     </section>
     <section className='second-container'>
<img src={strDrinkThumb} alt={strDrink} />
<aside className='info'>
<div className='name-info'>
    <span className='heading'>name:</span>
    <span>{strDrink}</span>
</div>
<div className='name-info'>
    <span className='heading'>Category:</span>
    <span>{strCategory}</span>
</div>
<div className='name-info'>
    <span className='heading'>Info:</span>
    <span>{strAlcoholic}</span>
</div>
<div className='name-info'>
    <span className='heading'>Glass:</span>
    <span>{strGlass}</span>
</div>
<div className='name-info'>
    <span className='heading'>Instructions:</span>
    <span>{strInstructions}</span>
</div>
<div className='name-info'>
    <span className='heading'>Ingredients:</span>
    <span>{strIngredient1}</span>
</div>

</aside>
     </section>
    </main>
  )
}

export default InfoPage

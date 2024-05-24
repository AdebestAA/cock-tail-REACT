import React from 'react'
import { useGlobalContext } from '../Context'
import { Link } from 'react-router-dom'

const CocktailsItems = () => {
    const {cocktails,inputValue,loading} = useGlobalContext()

    if (!loading && cocktails.length < 1) {
        return (
            <div className='all-cocktails'>
<h1>No matching cocktail</h1>
            </div>
        )
    }

        return (
    <div className='all-cocktails'>
        <h1 className='cocktail-header-home'>Cocktails</h1>

<article className='cocktails-box'>
    {cocktails.map((item,index)=>{

        const {idDrink,
            strAlcoholic,
            strCategory,
            strCreativeCommonsConfirmed,
            strDrink,
            strDrinkThumb,
            strGlass
        } = item
return (
    <section className='each-cocktail' key={idDrink}>
<img src={strDrinkThumb} alt={strAlcoholic} />

<div className='info-section'>
<h2>{strDrink.length > 11 ? strDrink.slice(0,10) + "..." :strDrink}</h2>
<h6>{strGlass}</h6>
<p>{strCategory}</p>
<Link to={`/${idDrink}`}>details</Link>
</div>
    </section>
)

    })}
</article>
    </div>
            )
        
}

export default CocktailsItems

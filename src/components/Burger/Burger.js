import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    
    // const transformedIngredient = Object.keys(props.ingredients)
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey} />
            })
        })

    // console.log(transformedIngredient)
    // console.log(transformedIngredients)
    // console.log(props.ingredients)
    // console.log(props.ingredients['salad'])
    // console.log(props.ingredients.salad)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default burger
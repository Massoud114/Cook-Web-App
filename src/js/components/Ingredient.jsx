import React from 'react';

const Ingredient = ({ingredient, filterText=""}) => {
	let startingIndex = ingredient.name.indexOf(filterText)
	let endingIndex = ingredient.name.indexOf(filterText) + filterText.length
	return <div className="p-2 w-25">
		<p>{ingredient.name.substring(0, startingIndex)}<span className="bg-primary">{ingredient.name.substring(startingIndex, endingIndex)}</span>{ingredient.name.substring(endingIndex)}</p>
	</div>
}

const IngredientTable = ({ingredients, filterText}) => {
	if (filterText.length >= 3){
		let filteredIngredients = ingredients.filter(ingredient => ingredient.name.indexOf(filterText) !== -1);
		console.log(filteredIngredients);
		return filteredIngredients.length > 0
			?
			<div className="d-flex flex-row flex-wrap">
				{filteredIngredients.map(ingredient => <Ingredient filterText={filterText} key={ingredient.id} ingredient={ingredient}/>) }
			</div>
			:
			<p>Aucun résultat pour votre recherche</p>
	}
	else {
		return <div>Bientôt la fonctionnalité d'ingrédients les plus utilisés</div>
	}
}

export default IngredientTable

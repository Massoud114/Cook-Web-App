import React from 'react';

/**
 *
 * @param ingredient Infos sur l'ingrédient
 * @param filterText Le texte recherché : Pour afficher les caractères surlignés
 * @returns {JSX.Element}
 */
const Ingredient = ({ingredient, filterText=""}) => {
	let startingIndex = ingredient.name.indexOf(filterText)
	let endingIndex = ingredient.name.indexOf(filterText) + filterText.length
	return <a href="#"><li>{ingredient.name.substring(0, startingIndex)}<span className="bg-primary">{ingredient.name.substring(startingIndex, endingIndex)}</span>{ingredient.name.substring(endingIndex)}</li></a>
}

const IngredientTable = ({ingredients, filterText}) => {
	// On fait le trie des ingrédients selon la taille de la chaine de recherche
	let filteredIngredients = filterText.length >= 3
		?
		ingredients.filter(ingredient => ingredient.name.indexOf(filterText) !== -1)
		:
		ingredients.filter(ingredient => filterText !== "" && ingredient.name.startsWith(filterText));

	return filteredIngredients.length > 0
		?
		<ul className="element-list">
			{filteredIngredients.map(ingredient => <Ingredient filterText={filterText} key={ingredient.id} ingredient={ingredient}/>) }
		</ul>
		:
		<a href={null}>Aucun résultat pour votre recherche</a>
}

export default IngredientTable

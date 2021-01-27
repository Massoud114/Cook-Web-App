import ingredients from './ingredients.js'
import {render} from 'react-dom'
import React from 'react'

const INGREDIENTS = ingredients

function IngredientShow({ingredient}) {
	return <div className="p-2 w-25">
		<p>{ingredient.name}</p>
	</div>
}

function IngredientTable({ingredients, filterText}) {
	return (filterText.length >= 2 && <div className="d-flex flex-row flex-wrap">
		{ingredients.map(ingredient => {
			if (ingredient.name.indexOf(filterText) !== -1){
				return <IngredientShow key={ingredient.id} ingredient={ingredient}/>
			}
		}) }
	</div>)
}

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
	}

	handleFilterTextChange(e) {
		this.props.onFilterTextChange(e.target.value)
	}

	render() {

		const {filterText} = this.props

		return <div>
			<div className="form-group">
				<input type="text" value={filterText} onChange={this.handleFilterTextChange} className="form-control" placeholder="Tapez au minimum 2 caractères pour lancer la recherche"/>
			</div>
		</div>
	}

}

class SearchBlock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			filterText : ''
		}
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
	}

	handleFilterTextChange(filterText) {
		this.setState({filterText})
	}

	render() {
		const {ingredients} = this.props
		return <React.Fragment>
			<SearchBar
				filterText={this.state.filterText}
				onFilterTextChange={this.handleFilterTextChange}
			/>
			<IngredientTable
				ingredients={ingredients}
				filterText={this.state.filterText}
			/>
		</React.Fragment>
	}
}

render(<SearchBlock ingredients={INGREDIENTS}/>, document.getElementById('app'))

import React from "react";
import SearchBar from "./SearchBar";
import IngredientTable from "./Ingredient"


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
		return <div className="search-bloc">
			<SearchBar
				filterText={this.state.filterText}
				onFilterTextChange={this.handleFilterTextChange}
			/>
			{this.state.filterText !== "" && <IngredientTable
				ingredients={ingredients}
				filterText={this.state.filterText}
			/>}
		</div>
	}
}

export default SearchBlock;

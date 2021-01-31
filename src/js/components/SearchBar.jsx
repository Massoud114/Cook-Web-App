import React from "react";

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
		return <input type="text" value={filterText} onChange={this.handleFilterTextChange} className="form-control" placeholder="Tapez au minimum 2 caractères pour lancer la recherche"/>
	}

}

export default SearchBar;

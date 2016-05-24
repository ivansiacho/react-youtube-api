import React, { Component } from 'react';

/*const SearchBar = () => {
	return <input />;
};*/

//const Component = React.Component;

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="form-group clearfix">
				<label className="col-md-12 control-label">Search your video</label>
				<div className="col-md-8">
					<input
						className="form-control"
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)} />
				</div>
				<div className="col-md-4">
					<button className="btn btn-default" onClick={() => this.onSubmitSearch(this.state.term)}>Search</button>
				</div>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
	}

	onSubmitSearch(term) {
		this.props.onSearchTermChange(term);
	}
};

export default SearchBar;
import React from 'react';

import { GiphysIndex } from './giphys_index';

export class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchTerm(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.searchTerm !== '') {
      this.props.fetchSearchGiphys(this.state.searchTerm);
      this.setState({ searchTerm: '' });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search-bar">
          <input type="text" 
            onChange={this.handleSearchTerm} 
            value={this.state.searchTerm} 
            placeholder="Search Term"></input>

          <input type="submit" value="Search"></input>
        </form>

        <GiphysIndex results={this.props.giphys} />
      </div>
    );
  }
}
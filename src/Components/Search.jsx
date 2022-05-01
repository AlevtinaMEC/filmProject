import React from 'react';

export class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handleSearch = (event) => {
        this.setState({search: event.target.value})
    }

    handleKey = (event) => {
        if(event.key === "Enter") {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => this.props.searchMovie(this.state.search, this.state.type));
    }

    render() {
        return (
            <div className="search-container">
                <div className="search">
                    <input className="search__input" type="text" placeholder='Search' onChange={this.handleSearch} onKeyDown={this.handleKey}/>
                    <button className="search__button" onClick={() => {this.props.searchMovie(this.state.search, this.state.type)}}>Search</button>
                </div>
                <div className="search-type">
                    <label className="search-type__input" htmlFor="">
                        <input type="radio" data-type="all" onClick={this.handleFilter} checked={this.state.type === 'all'}/> All
                    </label>
                    <label className="search-type__input" htmlFor="">
                        <input type="radio" data-type="movie" onClick={this.handleFilter} checked={this.state.type === 'movie'}/> Movie
                    </label>
                    <label className="search-type__input" htmlFor="">
                        <input type="radio" data-type="series" onClick={this.handleFilter} checked={this.state.type === 'series'}/> Series
                    </label>
                </div>
            </div>
        )
    }
}
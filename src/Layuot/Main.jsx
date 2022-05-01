import React from 'react';
import { Movies } from '../Components/Movies';
import { Search } from '../Components/Search';
import { Preloader } from '../Components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {
    state = {
        movies: [],
        isLoading: true
    }

    componentDidMount = () => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, isLoading: false}));
    }

    searchMovie = (search, type = 'all') => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}`: ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, isLoading: false}));
    }

    render() {
        const {movies, isLoading} = this.state;

        return <div className="main">
            <Search  searchMovie={this.searchMovie}/>
            {isLoading ? <Preloader/> : <Movies movies={movies}/>}
        </div>
    }
}

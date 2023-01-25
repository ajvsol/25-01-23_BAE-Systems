import React from 'react';
import { StateContextProvider } from '../context/StateContext';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import AdvertCards from '../components/AdvertCards'
import PostCards from "../components/PostCards"

export default function Search() {
    return (
			<>
				<NavBar/>
				<SearchBar/>
				<AdvertCards/>
				<PostCards/>
			</>
    )
}

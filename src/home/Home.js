import React from 'react';
import './home.css';
import Header from '../comons/header/Header';
import List from'../home/list/List' ;
import data from '../data/pokemons.json';
import Search from '../home/search/Search'


export default function Home() {

    return(
        <>
            <Header/>
            <Search pokemons={data}></Search>
            <List pokemons={data}></List>
        </>
    )
}
    
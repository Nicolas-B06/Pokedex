import React from 'react';
import './home.css';
import Header from '../comons/header/Header';
import List from'../home/list/List' ;
import data from '../data/pokemons.json';
import Search from '../home/search/Search'
import Footer from '../comons/footer/Footer';

export default function Home() {

    const [query, setQuery] = React.useState("")
    const [lang, setLang] = React.useState("fr")

    const dataFilter = data.filter((pokemon)=>{
        if ( pokemon.names.fr.toLowerCase().includes(query.toLowerCase())){
            return true
        } else { return false}
    }
    )

    const t = lang

    return(
        <>
            <Header lang={lang} setLang={setLang}></Header>
            <Search query={query} setQuery={setQuery}></Search>
            <List pokemons={dataFilter} t={t}></List>
            <Footer/>
        </>
    )
}
    
import React from 'react';
import './home.css';
import Header from '../comons/header/Header';
import List from'../home/list/List' ;
import Search from '../home/search/Search'
import Footer from '../comons/footer/Footer';
import {Typography} from "@mui/material";

export default function Home({lang, setLang, data, dataType}) {

    const [query, setQuery] = React.useState("")
    const dataFilter = data.filter((pokemon)=>{
        if ( pokemon.names[lang].toLowerCase().includes(query.toLowerCase())){
            return true
        } else { return false}
    })

    return(
        <>
            <Typography component="div" sx={{backgroundColor:"#282c34"}} className="App">
            <Header lang={lang} setLang={setLang}></Header>
            <Search query={query} setQuery={setQuery}></Search>
            <List pokemons={dataFilter} types={dataType} lang={lang}></List>
            <Footer/>
            </Typography>
        </>
    )
}
    
import React from 'react';
import Card from './card/Card';
import { Link,Outlet } from "react-router-dom";
import { Box } from '@mui/material'

export default function List({pokemons, types, lang }) {
    
    return(
        <>
            <Box sx={{ width:'80%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',margin:'auto' }}>
            <Outlet />
                {pokemons.map((pokemon)=>{return <Link to= {`/details/${pokemon.id}`} key={pokemon.id} style={{textDecoration:"none", color:"black"}}><Card key={pokemon.id} name={pokemon} types={types} lang={lang}></Card></Link> })}
            </Box>
        </>
    )
}
import React from 'react';
import Card from './card/Card';
import './list.css'

export default function List({pokemons, t }) {
    console.log(pokemons,'pok');

    return(
        <>
        <div className='list-container'>
            {pokemons.map((pokemon)=>{return <Card key={pokemon.id} name={pokemon} t={t}></Card>})}
        </div>
        </>
    )
}
import React from 'react';
import Card from './card/Card';
import './list.css'

export default function List({pokemons}) {

    return(
        <>
        <div className='list-container'>
            {pokemons.map((pokemon)=>{return <Card key={pokemon.id} name={pokemon}></Card>})}
        </div>
        </>
    )
}
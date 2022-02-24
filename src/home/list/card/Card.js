import React from 'react';
import './card.css';

export default function Card({name}) {

    const type = name.types.map((type)=>{return type})
    console.log(name.types,'type');

    return(
        <div className={"card "+type[0]+" "+type[1]}>
            <span className='card-number'>N°{name.id}</span>
            <h1 className='card-title'>{name.names.fr}</h1>
            <img className='card-img' src={name.image} alt=""/>
            <div className='type'>
            {name.types.map((type)=>{return <div key={type} className={"type-"+ type}>{type}</div>})}
            </div>
        </div>
    )
}
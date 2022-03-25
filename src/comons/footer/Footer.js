import React from 'react';
import draco3 from './draco3.gif';
import './footer.css';

export default function Footer(props) {
    
    return (
        <>
            <div className='footer-container'>
                <img className='footer-gif' src={draco3} alt='gif pikachu'/>
            </div> 
        </>
    )
}

import React from 'react';
import logoSrc from './logo.svg';
import './header.css'

export default function Header(props) {
    
    return (
        <>
            <div className='header-container'>
                <img className='logo-img' src={logoSrc} alt='Logo pokemon'/>
                <div className='langages-selection'>
                    
                    <select className='select-langages'>
                        <option value="">Langage</option>
                        <option value="FR">FR</option>
                        <option value="EN">EN</option>
                    </select>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import logoSrc from './logo.svg';
import pika from './pika.gif';
import draco from './Draco2.gif';
import draco2 from './gif_dracaufeu.gif';
import draco3 from './draco3.gif';
import draco4 from './draco4.gif';
import salameche2 from './salameche2.gif';
import './header.css';

export default function Header({lang , setLang}) {

    function onChange(e){
        setLang(e.target.value);
    }
    
    return (
        <>
            <div className='header-container'>
                <img className='logo-img' src={logoSrc} alt='Logo pokemon'/>
                <div className='header-content'>
                    <div className='langages-selection'>
                        <select className='select-langages' value={lang} onChange={onChange} onBlur={onChange}>
                            <option value="fr">Langage</option>
                            <option value="fr">Français</option>
                             <option value="en">English</option>
                             <option value="ja">日本</option>
                            <option value="es">Español</option>
                            <option value="de">Deutsch</option>
                            <option value="it">Italiano</option>
                            <option value="ko">한국어</option>

                        </select>
                    </div>
                    <img className='header-gif' src={draco4} alt='gif pikachu'/>
                </div> 
            </div>
        </>
    )
}

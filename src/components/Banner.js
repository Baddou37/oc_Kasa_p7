import React from 'react';
import imgBG from '../assets/imgBG.png';
import maskBG from '../assets/maskBG.png';

const Banner = () => {
    return (
        <div className='banner_container'>
            <img src={imgBG} alt="" className='imgBG' />
            <img src={maskBG} alt="filtre bannière" className='maskBG' />
            <p className='banner_txt_mobile'>Chez vous,<br />partout et ailleurs</p>
            <p className='banner_txt_desktop'>Chez vous, partout et ailleurs</p>            
        </div>
    );
};

export default Banner;
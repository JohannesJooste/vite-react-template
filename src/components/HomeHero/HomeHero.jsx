import React from 'react';
import './HomeHero.css';
import HeroImage from '../../assets/images/old_photo.jpg'
import JhfImage from '../../assets/images/jooste.png'

const HomeHero = () => {
    const heroStyle = {
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        
    };

    const jhfStyle = {
        height: '44vh',
        width: 'auto',
    };


    return (
        <div className="container-fluid" style={heroStyle}>
            <div className="container vh-100">
                <div className="row vh-100 align-items-center">
                    <img src={JhfImage} alt="Jooste Heritage Foundation" style={jhfStyle} />
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
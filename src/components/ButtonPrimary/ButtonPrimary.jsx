import React from "react";
import "./ButtonPrimary.css";



const ButtonPrimary = ({ url, text }) => {
    return (
        <a href={url} className='btn btn-primary-jhf' type="button">
            {text} 
        </a>
    );
};

export default ButtonPrimary;
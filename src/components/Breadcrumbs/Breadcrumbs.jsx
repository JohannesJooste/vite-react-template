import React from "react";
import './Breadcrumbs.css'




const Breadcrumbs = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item bc-item-jhf ${index === items.length - 1 ? 'active' : ''}`}
                    >
                        {index === items.length - 1 ? (
                            item.label
                        ) : (
                            <a href={item.url}>{item.label}</a>
                        )}

                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
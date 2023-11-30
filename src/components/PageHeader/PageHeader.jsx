import React from "react";
import './PageHeader.css'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import PropTypes from 'prop-types';



const PageHeader = ({ title, breadcrumbItems }) => {
    return (
        <div className="container-fluid py-5 mb-5" style={{ backgroundColor: '#cddee5' }}>
            <div className="container py-2">
                <Breadcrumbs items={breadcrumbItems} />
                <h1>{title}</h1>
            </div>
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumbItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
};

export default PageHeader;
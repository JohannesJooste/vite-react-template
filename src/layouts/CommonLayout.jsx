import React from 'react';
import PropTypes from 'prop-types';
import HeaderPrimary from '../components/HeaderPrimary/HeaderPrimary';
import PageHeader from '../components/PageHeader/PageHeader';
import FooterPrimary from '../components/FooterPrimary/FooterPrimary';

const CommonLayout = ({ children, pageTitle, breadcrumbItems }) => {
  return (
    <div>
        <HeaderPrimary />
        <PageHeader 
            title={pageTitle}
            breadcrumbItems={breadcrumbItems}
        />
        <main>{children}</main>
        <FooterPrimary />
    </div>
  );
};

CommonLayout.propTypes = {
    children: PropTypes.node.isRequired,
    pageTitle: PropTypes.string.isRequired,
    breadcrumbItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CommonLayout;

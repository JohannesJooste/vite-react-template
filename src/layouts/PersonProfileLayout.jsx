import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLoading } from '../contexts/LoadingContext';
import Spinner from '../components/LoadingSpinner/LoadingSpinner';
import HeaderPrimary from '../components/HeaderPrimary/HeaderPrimary';
import PageHeader from '../components/PageHeader/PageHeader';
import FooterPrimary from '../components/FooterPrimary/FooterPrimary';

const PersonProfileLayout = ({ children, pageTitle, breadcrumbItems }) => {
    const { isLoading, setLoading } = useLoading();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [setLoading]);

    return (
        <div>
            {isLoading && <Spinner />}
            <HeaderPrimary />
            <PageHeader 
                title={pageTitle}
                breadcrumbItems={breadcrumbItems}
            />
            {/* ... rest of the component ... */}
            <main>{children}</main>
            <FooterPrimary />
        </div>
    );
};

PersonProfileLayout.propTypes = {
    children: PropTypes.node.isRequired,
    pageTitle: PropTypes.string.isRequired,
    breadcrumbItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
};

export default PersonProfileLayout;
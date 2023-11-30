import React from "react";
import PersonProfileLayout from "../../layouts/PersonProfileLayout";

const PersonProfile = () => {
    const breadcrumbItems = [
        { label: 'Home', url: '/' },
        { label: 'Person', url: 'person/' }
    ];
    return (
        <PersonProfileLayout
            pageTitle='Person Profile'
            breadcrumbItems={breadcrumbItems}
        >
        </PersonProfileLayout>
    );
};

export default PersonProfile;

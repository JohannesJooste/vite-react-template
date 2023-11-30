import * as icons from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

export const Icon = ({ iconName, ...props }) => {
    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...props} />;
}

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    // You can add additional prop validations here if there are other props
};

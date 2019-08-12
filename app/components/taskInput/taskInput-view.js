import React, {Fragment} from "react";
import {View} from "react-native";
import PropTypes from "prop-types";

class Component extends React.PureComponent {
    render() {
        return (<Fragment/>)
    }
}

Component.propTypes = {
    navigation: PropTypes.any.isRequired,
    right: PropTypes.any,
    title: PropTypes.string,
};

Component.defaultProps = {
    title: '',
};

export default Component;

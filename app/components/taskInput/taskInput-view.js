import React from "react";
import {TextInput} from "react-native";
import PropTypes from "prop-types";
import styles from "./taskInput-styles";

class Component extends React.PureComponent {
    render() {
        const {value, onValueChange, style} = this.props;
        return (<TextInput
            placeholder={'What is Your task ? …'}
            defaultValue={value}
            onValueChange={onValueChange}
            style={[styles.input, style]}
            multiline={true}
            numberOfLines={2}
            underlineColorAndroid='transparent'
        />);
    }
}

Component.propTypes = {
    onValueChange: PropTypes.func,
    value: PropTypes.string,
    style: PropTypes.any,
};

Component.defaultProps = {
    onValueChange: (newV) => console.log(newV),
    value: '',
    style: {},
};

export default Component;

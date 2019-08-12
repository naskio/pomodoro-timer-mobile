import React from "react";
import {View, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import {Icon, Text} from 'react-native-elements';

import styles from './roundNumber-styles';
import theme from "../../styles/theme";

class Component extends React.PureComponent {

    constructor(props) {
        super(props);
        const {value} = props;
        this.state = {value};
    }

    render() {
        const {style, onValueChange} = this.props;
        const {value} = this.state;
        return (<View style={[styles.container, style]}>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={
                        () => {
                            this.setState({value: value - 1});
                            onValueChange(value - 1);
                        }
                    }
                    disabled={value<=1}
                >
                    <Icon
                        name='remove'
                        type='material'
                        color={theme.COLORS.ICONS}
                        size={48}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>{value}</Text>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => {
                        this.setState({value: value + 1});
                        onValueChange(value + 1);
                    }}
                >
                    <Icon
                        name='add'
                        type='material'
                        color={theme.COLORS.ICONS}
                        size={48}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

Component.propTypes = {
    onValueChange: PropTypes.func,
    value: PropTypes.number,
    style: PropTypes.any,
};

Component.defaultProps = {
    onValueChange: (newV) => console.log(newV),
    value: 0,
    style: {},
};

export default Component;

import React from "react";
import {Button, Icon} from 'react-native-elements';
import PropTypes from "prop-types";
import styles from './outlineButton-styles';
import theme from "../../styles/theme";

class Component extends React.PureComponent {
    render() {
        const {title, iconName, iconType, onClick, disabled} = this.props;
        return (
            <Button
                icon={
                    <Icon
                        name={iconName}
                        type={iconType}
                        size={48}
                        color={theme.COLORS.PRIMARY_DARK}
                    />
                }
                iconRight
                title={title.toUpperCase()}
                titleStyle={styles.titleStyle}
                containerStyle={styles.containerStyle}
                buttonStyle={styles.buttonStyle}
                onPress={onClick}
                disabled={disabled}
                type={'outline'}
            />)
    }
}

Component.propTypes = {
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    iconType: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Component.defaultProps = {
    title: '',
    iconName: '',
    iconType: 'material',
    onClick: () => {
    },
    disabled: false,
};

export default Component;

import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {View} from "react-native";
import OutlineButton from '../../components/outlineButton';
import RedButton from '../../components/redButton';

class Component extends React.PureComponent {
    render() {
        return (<Fragment>
            <OutlineButton title='play' iconName='play-arrow' iconType='material' />
            <RedButton title='play' iconName='play-arrow' iconType='material' />
        </Fragment>)
    }
}

Component.propTypes = {
    // navigation: PropTypes.any.isRequired,
    // right: PropTypes.any,
    // title: PropTypes.string,
};

Component.defaultProps = {
    // title: '',
};

export default Component;

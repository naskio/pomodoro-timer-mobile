import React, {Fragment} from "react";
import PropTypes from "prop-types";
import styles from './home-styles';
import {View, Image, Text, TextInput} from "react-native";
import OutlineButton from '../../components/outlineButton';
import RedButton from '../../components/redButton';
import TaskInput from '../../components/taskInput';
import RoundNumber from '../../components/roundNumber';

class Component extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={require('../../assets/background.png')}
                />
                <Text style={styles.slogan}>Productive as never !</Text>
                <Text style={styles.title}>Round 1</Text>
                <Text style={styles.subtitle}>Your task…</Text>
                <TaskInput style={{marginVertical: 16}}/>
                {/*<RedButton title='play' iconName='play-arrow' iconType='material'/>*/}
                <RedButton title='next' iconName='skip-next' iconType='material'/>
                <RoundNumber/>
                {/*<OutlineButton title='play' iconName='play-arrow' iconType='material'/>*/}
            </View>)
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

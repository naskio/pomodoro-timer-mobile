import React, {Fragment} from "react";
import PropTypes from "prop-types";
import styles from './home-styles';
import {View, Image, Text} from "react-native";
import OutlineButton from '../../components/outlineButton';
import RedButton from '../../components/redButton';
import TaskInput from '../../components/taskInput';
import RoundNumber from '../../components/roundNumber';
import {toMMSS} from "../../utils/time";

class Component extends React.PureComponent {
    render() {
        const {
            step,
            numberOfRounds,
            roundNumber,
            remaining,
            isPaused,
            title,
            subtitle,
            taskDescription,
            setState,
        } = this.props;

        return <View style={styles.container}>

            <Image style={styles.image}
                   source={require('../../assets/background.png')}
            />

            <Text style={styles.slogan}>Productive as never !</Text>
            {
                !!title && <Text style={styles.title}>{title}</Text>
            }
            {
                !!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>
            }
            {
                step === 1 && <Fragment>
                    <TaskInput style={{marginVertical: 24}}
                               value={taskDescription}
                               onValueChange={(value) => setState({taskDescription: value})}
                    />
                    <RedButton title='next' iconName='skip-next' iconType='material'
                               onClick={() => {
                                   setState({step: 2, title: 'Number of rounds'});
                               }}/>
                </Fragment>
            }
            {
                step === 2 && <Fragment>
                    <RoundNumber style={{marginBottom: 24}}
                                 value={numberOfRounds}
                                 onValueChange={(value) => setState({numberOfRounds: value})}
                    />

                    <RedButton title='start' iconName='play-arrow' iconType='material'
                               onClick={() => {
                                   setState({
                                       step: 3,
                                       title: `Round ${roundNumber}`,
                                       subtitle: taskDescription || 'Your task...'
                                   });
                               }}/>
                </Fragment>
            }
            {
                step === 3 && <Fragment>
                    <Text style={styles.counter}>{toMMSS(remaining)}</Text>
                    {
                        isPaused ?
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch'}}>
                                <OutlineButton title='resume' iconName='play-arrow' iconType='material'
                                               onClick={() => {
                                                   setState({
                                                       isPaused: false,
                                                   });
                                               }}/>
                                <RedButton style={{marginLeft: 32,}} title='stop' iconName='stop' iconType='material'
                                           onClick={() => {
                                               setState({
                                                   step: 1,
                                               });
                                           }}/>
                            </View>
                            :
                            <RedButton title='PAUSE' iconName='pause' iconType='material'
                                       onClick={() => {
                                           setState({
                                               isPaused: true,
                                           });
                                       }}/>
                    }
                </Fragment>
            }
            {
                step === 4 && <Fragment>
                    <Text style={styles.counter}>{'00:00'}</Text>
                    <RedButton title='restart' iconName='play-arrow' iconType='material'
                               onClick={() => {
                                   setState({
                                       step: 1,
                                   });
                               }}/>
                </Fragment>
            }
            {/*<RedButton title='play' iconName='play-arrow' iconType='material'/>*/}

            {/*<OutlineButton title='play' iconName='play-arrow' iconType='material'/>*/}
        </View>
    }
}

Component.propTypes = {
    step: PropTypes.number,
    numberOfRounds: PropTypes.number,
    roundNumber: PropTypes.number,
    remaining: PropTypes.number,
    isPaused: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    taskDescription: PropTypes.string,
    setState: PropTypes.func.isRequired,
};

Component.defaultProps = {
    step: 1,
    numberOfRounds: 4,
    roundNumber: 1,
    remaining: 1500,
    isPaused: false,
    title: '',
    subtitle: '',
    taskDescription: '',
};

export default Component;

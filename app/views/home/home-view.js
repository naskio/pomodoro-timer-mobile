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
            remaining,
            isPaused,
            title,
            subtitle,
            taskDescription,
            taskValueChange,
            roundsNumberValueChange,
            nextOnPress,
            startOnPress,
            pauseOnPress,
            resumeOnPress,
            stopOnPress,
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
                               onValueChange={taskValueChange}
                    />
                    <RedButton title='next' iconName='skip-next' iconType='material'
                               onClick={nextOnPress}/>
                </Fragment>
            }
            {
                step === 2 && <Fragment>
                    <RoundNumber style={{marginBottom: 24}}
                                 value={numberOfRounds}
                                 onValueChange={roundsNumberValueChange}
                    />

                    <RedButton title='start' iconName='play-arrow' iconType='material'
                               onClick={startOnPress}/>
                </Fragment>
            }
            {
                step === 3 && <Fragment>
                    <Text style={styles.counter}>{toMMSS(remaining)}</Text>
                    {
                        isPaused ?
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch'}}>
                                <OutlineButton title='resume' iconName='play-arrow' iconType='material'
                                               onClick={resumeOnPress}/>
                                <RedButton style={{marginLeft: 32,}} title='stop' iconName='stop' iconType='material'
                                           onClick={stopOnPress}/>
                            </View>
                            :
                            <RedButton title='PAUSE' iconName='pause' iconType='material'
                                       onClick={pauseOnPress}/>
                    }
                </Fragment>
            }
            {
                step === 4 && <Fragment>
                    <Text style={styles.counter}>{'00:00'}</Text>
                    <RedButton title='restart' iconName='play-arrow' iconType='material'
                               onClick={stopOnPress}/>
                </Fragment>
            }
        </View>
    }
}

Component.propTypes = {
    step: PropTypes.number,
    numberOfRounds: PropTypes.number,
    remaining: PropTypes.number,
    isPaused: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    taskDescription: PropTypes.string,
    taskValueChange: PropTypes.func.isRequired,
    roundsNumberValueChange: PropTypes.func.isRequired,
    nextOnPress: PropTypes.func.isRequired,
    startOnPress: PropTypes.func.isRequired,
    pauseOnPress: PropTypes.func.isRequired,
    resumeOnPress: PropTypes.func.isRequired,
    stopOnPress: PropTypes.func.isRequired,
};

Component.defaultProps = {
    step: 1,
    numberOfRounds: 1,
    remaining: 1,
    isPaused: false,
    title: '',
    subtitle: '',
    taskDescription: '',
};

export default Component;

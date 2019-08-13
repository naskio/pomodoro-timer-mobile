import React from "react";
import View from "./home-view";
import {TaskTimer} from 'tasktimer';
import {DEFAULT_BREAK_TIME, DEFAULT_ROUND_TIME, DEFAULT_ROUNDS, DEFAULT_TASK} from "../../config/config";


const initialState = {
    step: 1,
    numberOfRounds: DEFAULT_ROUNDS,
    roundNumber: 1,
    isPaused: false,
    isBreak: false,
    remaining: DEFAULT_ROUND_TIME,
    title: 'Focus only on 1 task',
    subtitle: '',
    taskDescription: DEFAULT_TASK,
};

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.timer = new TaskTimer(1000);
        this.timer.on('tick', this.secondAction);
    }

    taskValueChange = (value) => {
        this.setState({taskDescription: value});
    };
    roundsNumberValueChange = (value) => {
        this.setState({numberOfRounds: value});
    };
    nextOnPress = () => {
        const {taskDescription} = this.state;
        if (!taskDescription) {
            this.setState({taskDescription: 'Your task...'});
        }
        this.setState({step: 2, title: 'Number of rounds'});
    };
    startOnPress = () => {
        const {
            roundNumber,
            taskDescription,
        } = this.state;
        this.setState({
            step: 3,
            title: `Round ${roundNumber}`,
            subtitle: taskDescription,
        });
        this.timer.start();
    };
    pauseOnPress = () => {
        this.setState({
            isPaused: true,
        });
        this.timer.pause();
    };
    resumeOnPress = () => {
        this.setState({
            isPaused: false,
        });
        this.timer.resume();
    };
    stopOnPress = () => {
        this.setState(initialState);
        this.timer.stop();
    };
    secondAction = () => {
        const {
            numberOfRounds,
            roundNumber,
            remaining,
            isBreak,
            taskDescription,
        } = this.state;
        const newRemaining = remaining - 1;
        if (newRemaining <= 0) {
            if (isBreak) {
                this.setState({
                    isBreak: false,
                    roundNumber: roundNumber + 1,
                    remaining: DEFAULT_ROUND_TIME,
                    title: `Round ${roundNumber + 1}`,
                    subtitle: taskDescription,
                });
            } else {
                if (roundNumber >= numberOfRounds) {
                    this.setState({remaining: 0, step: 4, title: 'Congratulations!', subtitle: 'You have finished'});
                    this.timer.stop();
                } else {
                    this.setState({
                        isBreak: true,
                        remaining: DEFAULT_BREAK_TIME,
                        title: 'Take a break',
                        subtitle: '',
                    });
                }
            }
        } else {
            this.setState({remaining: newRemaining});
        }
    };


    render() {
        const {
            step,
            numberOfRounds,
            remaining,
            isPaused,
            isBreak,
            title,
            subtitle,
            taskDescription,
        } = this.state;
        return <View
            step={step}
            numberOfRounds={numberOfRounds}
            remaining={remaining}
            isBreak={isBreak}
            isPaused={isPaused}
            title={title}
            subtitle={subtitle}
            taskDescription={taskDescription}
            taskValueChange={this.taskValueChange}
            roundsNumberValueChange={this.roundsNumberValueChange}
            nextOnPress={this.nextOnPress}
            startOnPress={this.startOnPress}
            pauseOnPress={this.pauseOnPress}
            resumeOnPress={this.resumeOnPress}
            stopOnPress={this.stopOnPress}
        />;
    }
}

export default Component;

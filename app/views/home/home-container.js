import React from "react";
import View from "./home-view";

const initialState = {
    step: 1,
    numberOfRounds: 4,
    roundNumber: 1,
    isPaused: false,
    isBreak: false,
    remaining: 1500,
    title: 'Focus only on 1 task',
    subtitle: '',
    taskDescription: '',
};

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }


    render() {
        const {
            step,
            numberOfRounds,
            roundNumber,
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
            roundNumber={roundNumber}
            remaining={remaining}
            isBreak={isBreak}
            isPaused={isPaused}
            title={title}
            subtitle={subtitle}
            taskDescription={taskDescription}
            setState={ob => this.setState(ob)}
        />;
    }
}

export default Component;

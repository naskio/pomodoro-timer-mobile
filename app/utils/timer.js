import BackgroundTimer from 'react-native-background-timer';

export default class {
    constructor(ms, action) {
        this.ms = ms;
        this.action = action;
    }

    start = () => {
        BackgroundTimer.runBackgroundTimer(this.action, this.ms);
    };

    stop = () => {
        BackgroundTimer.stopBackgroundTimer();
    }
}

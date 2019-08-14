import Tts from 'react-native-tts';

export const initTts = () => Tts.getInitStatus().then(() => {
    Tts.setDefaultLanguage('en-US');
}, (err) => {
    if (err.code === 'no_engine') {
        Tts.requestInstallEngine();
    }
});
export const speak = (message) => Tts.speak(message);

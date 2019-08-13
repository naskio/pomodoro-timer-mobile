import {Platform} from 'react-native';

export default {
    FONT_FAMILY: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
    }),
    COLORS: {
        PRIMARY: '#EF5350',
        PRIMARY_DARK: '#F44336',
        SECONDARY: '#ffffff',
        TEXT: '#525252',
        ICONS: '#525252',
    },
    FONT_SIZE: {
        SMALL: 16,
        MEDIUM: 20,
        LARGE: 24,
    },
    FONT_WEIGHT: {
        LIGHT: '200',
        REGULAR: '400',
        MEDIUM: '600',
        BOLD: 'bold',
        BLACK: '900',
    }
};

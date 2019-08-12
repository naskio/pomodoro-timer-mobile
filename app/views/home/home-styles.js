import {Dimensions, Platform, StyleSheet} from "react-native";
import theme from '../../styles/theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {width: '100%', height: undefined, aspectRatio: 1220 / 545},
    slogan: {
        color: theme.COLORS.PRIMARY,
        fontSize: theme.FONT_SIZE.LARGE,
        fontWeight: theme.FONT_WEIGHT.BOLD,
        fontFamily: theme.FONT_FAMILY,
        marginTop: 16,
        marginBottom: 72,
    },
    title: {
        color: theme.COLORS.TEXT,
        fontSize: theme.FONT_SIZE.LARGE,
        fontWeight: theme.FONT_WEIGHT.BOLD,
        fontFamily: theme.FONT_FAMILY,
    },
    subtitle: {
        color: theme.COLORS.TEXT,
        fontSize: theme.FONT_SIZE.SMALL,
        fontWeight: theme.FONT_WEIGHT.REGULAR,
        fontFamily: theme.FONT_FAMILY,
    },
});

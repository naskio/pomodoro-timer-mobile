import {Dimensions, Platform, StyleSheet} from "react-native";
import theme from '../../styles/theme';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        borderRadius: 16,
        borderWidth: 4,
        borderColor: theme.COLORS.ICONS,
        height: 56,
        width: 56,
    },
    text: {
        color: theme.COLORS.ICONS,
        fontSize: 96,
        fontWeight: theme.FONT_WEIGHT.REGULAR,
        fontFamily: theme.FONT_FAMILY,
        marginHorizontal: 32,
    },
});

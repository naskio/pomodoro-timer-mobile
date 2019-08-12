import {Dimensions, Platform, StyleSheet} from "react-native";
import theme from '../../styles/theme';

export default StyleSheet.create({
    buttonStyle: {
        backgroundColor: theme.COLORS.PRIMARY_DARK,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    titleStyle: {
        color: theme.COLORS.SECONDARY,
        fontFamily: theme.FONT_FAMILY,
        fontSize: theme.FONT_SIZE.LARGE,
        fontWeight: theme.FONT_WEIGHT.MEDIUM,
    },
    containerStyle: {
        flexDirection: 'row',
    },
});

import {Dimensions, Platform, StyleSheet} from "react-native";
import theme from '../../styles/theme';

export default StyleSheet.create({
    buttonStyle: {
        borderWidth: 4,
        borderRadius: 16,
        borderColor: theme.COLORS.PRIMARY_DARK,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    titleStyle: {
        color: theme.COLORS.PRIMARY_DARK,
        fontFamily: theme.FONT_FAMILY,
        fontSize: theme.FONT_SIZE.LARGE,
        fontWeight: theme.FONT_WEIGHT.MEDIUM,
    },
    containerStyle: {
        flexDirection: 'row',
    },
});

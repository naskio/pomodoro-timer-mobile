import {StyleSheet} from "react-native";
import theme from '../../styles/theme';

export default StyleSheet.create({
    input: {
        marginHorizontal: 24,
        paddingHorizontal: 24,
        paddingVertical: 16,
        alignSelf: 'stretch',
        borderWidth: 2,
        borderColor: theme.COLORS.TEXT,
        borderRadius: 16,
    },
});

import {StyleSheet,Platform} from "react-native";
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
        ...Platform.select({
            ios: {
                minHeight: 104,
                paddingTop: 16,
            },
        }),
    },
})

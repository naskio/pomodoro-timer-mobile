import React, {Fragment} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Platform
} from 'react-native';

import Home from './views/home';

import theme from "./styles/theme";

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <StatusBar backgroundColor={theme.COLORS.PRIMARY} barStyle={Platform.select({
                    android: "light-content",
                    ios: "dark-content",
                })}/>
                <SafeAreaView>
                    <ScrollView contentInsetAdjustmentBehavior="automatic"
                                ref={ref => this.scrollView = ref}
                                onContentSizeChange={() => {
                                    this.scrollView.scrollToEnd({animated: true});
                                }}>
                        <Home/>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default App;

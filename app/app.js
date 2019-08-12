import React, {Fragment} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

import Home from './views/home';

import theme from "./styles/theme";

const App = () => {
    return (
        <Fragment>
            <StatusBar backgroundColor={theme.COLORS.PRIMARY} barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Home/>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

export default App;

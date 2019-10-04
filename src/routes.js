import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#45a247',
                },
                headerTintColor: '#fff',
            },
        }
    )
);

export default Routes;

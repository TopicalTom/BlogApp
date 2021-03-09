import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Context
import { BlogProvider } from './src/context/BlogProvider';

// Screens
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/IndexScreen';
import EditScreen from './src/screens/IndexScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <BlogProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Index">
                        <Stack.Screen 
                            name="Index" 
                            component={IndexScreen} 
                            options={{ title: 'Blog' }}
                        />
                        <Stack.Screen 
                            name="Show" 
                            component={ShowScreen} 
                            options={{ title: 'Show' }}
                        />
                        <Stack.Screen 
                            name="Create" 
                            component={CreateScreen} 
                            options={{ title: 'Create' }}
                        />
                        <Stack.Screen 
                            name="Edit" 
                            component={EditScreen} 
                            options={{ title: 'Edit' }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </BlogProvider>
        </SafeAreaProvider>
    );
};

export default App;
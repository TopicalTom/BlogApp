import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Elements
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

// Context
import { Provider as BlogProvider } from './src/context/BlogContext';

// Screens
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

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
                            options={({ navigation }) => ({ 
                                title: 'Blog',
                                headerRight: () => (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Create')}>
                                        <Icon 
                                            name='plus'
                                            type='feather' 
                                        />
                                    </TouchableOpacity>
                                )
                            })}
                        />
                        <Stack.Screen 
                            name="Show" 
                            component={ShowScreen} 
                            options={({ navigation, route }) => ({ 
                                title: 'Show',
                                headerRight: () => (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                                        <Icon 
                                            name='edit'
                                            type='feather' 
                                        />
                                    </TouchableOpacity>
                                )
                            })}
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
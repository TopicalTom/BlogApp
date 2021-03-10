import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Context
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);
    const navigation = useNavigation();

    // Grabs Blog Posts on Load + Adds Change Listener
    useEffect(() => {
        getBlogPosts();

        const unsubscribe = navigation.addListener('focus', () => {
            getBlogPosts();
        });

        return () => unsubscribe;
    }, []);

    return (
        <View style={styles.screen}>
            <FlatList 
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text 
                                    style={styles.title}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Icon 
                                        name='trash-2'
                                        type='feather' 
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    }, 
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 16

    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
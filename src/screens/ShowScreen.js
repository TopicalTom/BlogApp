import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Context
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
    const { id } = route.params;
    const { state } = useContext(BlogContext);

    const blogPost = state.find(blogPost => blogPost.id === id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
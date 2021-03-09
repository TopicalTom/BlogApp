import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Context
import { useBlog } from '../context/BlogProvider';

const IndexScreen = () => {
    const value = useBlog();

    return (
        <View>
            <Text>Index</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
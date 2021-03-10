import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Touchable } from 'react-native';
import { Icon } from 'react-native-elements';

// Context
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    return (
        <View style={styles.screen}>
            <Button 
                title="Add Post" 
                onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text 
                                style={styles.title}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Icon 
                                    name="trash-2"
                                    type='feather' 
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
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
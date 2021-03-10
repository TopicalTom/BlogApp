import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Context
import { Context as BlogContext } from '../context/BlogContext';

// Components
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = () => {
    const { addBlogPost } = useContext(BlogContext);
    const navigation = useNavigation();

    return (
        <BlogPostForm 
            onSubmit={(title, content) => {
                addBlogPost(title, content, () => navigation.navigate("Index"))
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;
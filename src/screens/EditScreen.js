import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Context
import { Context as BlogContext } from '../context/BlogContext';

// Components
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route }) => {
    const { id } = route.params;
    const { state, editBlogPost } = useContext(BlogContext);
    const navigation = useNavigation();

    const blogPost = state.find(
        blogPost => blogPost.id === id
    );

    return (
        <BlogPostForm 
            initialValues={{ 
                title: blogPost.title, 
                content: blogPost.content
            }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.goBack())
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;
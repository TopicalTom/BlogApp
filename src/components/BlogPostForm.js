import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const defaultValues = { title: "", content: "" };

const BlogPostForm = ({ initialValues = defaultValues, onSubmit }) => {
    const [ title, setTitle ] = useState(initialValues.title);
    const [ content, setContent ] = useState(initialValues.content);

    return (
        <View>
            <Input 
                label={title.length !== 0 ? "Title" : ""}
                onChangeText={text => setTitle(text)}
                placeholder="Title"
                value={title}
            />
            <Input 
                label={content.length !== 0 ? "Content" : ""}
                onChangeText={text => setContent(text)}
                placeholder="Content"
                value={content}
            />
            <Button 
                title="Save" 
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default BlogPostForm;
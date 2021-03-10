import createDataContext from './createDataContext';

// Reducers
const blogReducer = (state, action) => {
    const randomId = Math.floor(Math.random() * 99999);
    switch (action.type) {
        case 'edit_blogpost':
            return state.map(blogPost => {
                return blogPost.id === action.payload.id
                    ?   action.payload
                    :   blogPost;
            });
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: randomId, 
                    title: action.payload.title,
                    content: action.payload.content 
                }
            ];        
        default:
            return state;
    }
};

// Actions
const addBlogPost = dispatch => { 
    return (title, content, callback) => {
        dispatch({ 
            type: 'add_blogpost',
            payload: { title, content } 
        });
        if (callback) {
            callback();
        };
    };
};
const deleteBlogPost = dispatch => { 
    return id => {
        dispatch({ 
            type: 'delete_blogpost', 
            payload: id 
        });
    };
};
const editBlogPost = dispatch => { 
    return (id, title, content, callback) => {
        dispatch({ 
            type: 'edit_blogpost', 
            payload: { id, title, content } 
        });
        if (callback) {
            callback();
        };
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { 
        addBlogPost, 
        deleteBlogPost,
        editBlogPost 
    }, 
    []
)
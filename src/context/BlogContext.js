import createDataContext from './createDataContext';

// Reducers
const blogReducer = (state, action) => {
    const randomId = Math.floor(Math.random() * 99999);
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: randomId, 
                    title: `Blog Post #${state.length + 1}` 
                }
            ];        
        default:
            return state;
    }
};

// Actions
const addBlogPost = dispatch => { 
    return () => {
        dispatch({ 
            type: 'add_blogpost' 
        });
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

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { 
        addBlogPost, 
        deleteBlogPost 
    }, 
    []
)
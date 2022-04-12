import { createSlice} from '@reduxjs/toolkit';
import { getSubredditPosts } from '../api/reddit';

export const subRedditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        posts: []
    },

    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        }
    }
})


export const selectPosts = (state) => state.subreddit.posts;

export const setPosts = subRedditSlice.actions;

// This is a Redux Thunk that gets posts from a subreddit

export const fetchPosts = () => async (dispatch) => {
    const posts = await getSubredditPosts();
    dispatch(setPosts(posts));
}

export default subRedditSlice.reducer();
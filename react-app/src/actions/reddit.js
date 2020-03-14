import axios from "axios";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const INVALIADATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";

export const selectSubreddit = subreddit => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
};
export const invalidateSubreddit = subreddit => {
  return {
    type: INVALIADATE_SUBREDDIT,
    subreddit
  };
};
const requestPosts = subreddit => {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
};
const receivePosts = (subreddit, json) => {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receiveAt: Date.now()
  };
};
const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));
  return axios
    .get(`https://www.reddit.com/r/${subreddit}.json`)
    .then(res => res.data)
    .then(json => dispatch(receivePosts(subreddit, json)));
};
const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};
export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit));
  }
};

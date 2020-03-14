import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectSubreddit,
  invalidateSubreddit,
  fetchPostsIfNeeded
} from "../../../actions/reddit";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
class Reddit extends Component {
  componentDidMount() {
    const { fetchPostsIfNeeded, selectedSubreddit } = this.props;
    fetchPostsIfNeeded(selectedSubreddit);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { fetchPostsIfNeeded, selectedSubreddit } = this.props;
      fetchPostsIfNeeded(selectedSubreddit);
    }
  }
  render() {
    const {
      selectedSubreddit,
      selectSubreddit,
      posts,
      isFetching
    } = this.props;
    return (
      <div>
        <Picker
          selectedSubreddit={selectedSubreddit}
          selectSubreddit={selectSubreddit}
        />
        <div>{isFetching ? <p>isFetching</p> : <Posts posts={posts} />}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state;

  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  };
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectSubreddit: subreddit => dispatch(selectSubreddit(subreddit)),
    fetchPostsIfNeeded: subreddit => dispatch(fetchPostsIfNeeded(subreddit))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Reddit);

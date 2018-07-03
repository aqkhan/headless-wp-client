import React, { Component } from 'react';
import SinglePost from "./SinglePost";
import { connect } from 'react-redux';
import { fetchSinglePost } from '../../redux/actions';
import { withRouter } from 'react-router-dom';

class SinglePostContainer extends Component {
    componentWillMount() {
        this.props.fetchSinglePost(this.props.match.params.id);
    }
    render() {
        const { fetching, post } = this.props;
        return <SinglePost fetching={fetching} post={post} />;
    }
}

const mapStateToProps = (state, ownProps) => ({
    fetching: state.fetching,
    post: state.singlePost
});

export default connect(mapStateToProps, {fetchSinglePost})(withRouter(SinglePostContainer));

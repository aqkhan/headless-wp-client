import React, { Component } from 'react';
import SingleCategory from "./SingleCategory";
import { connect } from 'react-redux';
import { fetchCategoryPosts } from '../../redux/actions';
import { withRouter } from 'react-router-dom';
import { parseInteger } from '../../helpers';

class SingleCategoryContainer extends Component {
    componentWillMount() {
        this.props.fetchCategoryPosts(this.props.match.params.id);
    }
    render() {
        const { fetching, posts, category } = this.props;
        return <SingleCategory fetching={fetching} category={category} posts={posts} />;
    }
}

const mapStateToProps = (state, ownProps) => ({
    fetching: state.fetching,
    posts: state.posts,
    category: ownProps.match.params.id && !state.fetching ? state.categories.find(single => single.term_id === parseInteger(ownProps.match.params.id)) : null
});

export default connect( mapStateToProps, {fetchCategoryPosts} )(withRouter(SingleCategoryContainer));

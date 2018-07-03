import React, { Component } from 'react';
import Home from "./Home";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {
    redirectTo(path) {
        this.props.history.push(path);
    }
    render() {
        const { fetching, categories } = this.props;
        return <Home fetching={fetching} categories={ categories } redirectTo={this.redirectTo.bind(this)} />;
    }
}

const mapStateToProps = (state) => ({
    fetching: state.fetching,
    categories: state.categories
});

export default connect(mapStateToProps)(withRouter(HomeContainer));

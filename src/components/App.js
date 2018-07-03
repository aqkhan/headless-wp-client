import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../redux/actions';

import HomeContainer from "./Home/HomeContainer";
import SingleCategoryContainer from './SingleCategory/SingleCategoryContainer';
import SinglePostContainer from './SinglePost/SinglePostContainer';

class App extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomeContainer} />
        <Route path="/category/:id" exact component={SingleCategoryContainer} />
        <Route path="/post/:id" exact component={SinglePostContainer} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {fetchCategories})(App);

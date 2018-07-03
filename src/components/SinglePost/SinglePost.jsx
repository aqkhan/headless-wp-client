import React, { Component } from 'react';
import Header from "../Header/index";
import Footer from "../Footer/index";
import Loader from '../Loader/Loader';

class SinglePost extends Component {
    render() {
        const { fetching, post } = this.props;
        return !fetching ? (
            <div id="wrapper">
                <Header/>
                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h1>{post.post_title}</h1>
                            </header>
                            <span className="image main"><img src={post.thumbnail ? post.thumbnail : ''} alt="" /></span>
                            <p>{post.post_content}</p>
                        </div>
                    </section>

                </div>
                <Footer/>
            </div>
        ) : <Loader/>;
    }
}

export default SinglePost;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from "../Header/index";
import Footer from "../Footer/index";
import Loader from '../Loader/Loader';

class SingleCategory extends Component {
    render() {
        const { fetching, posts, category } = this.props;
        return !fetching && category !== undefined && category !== null ? (
            <div id="wrapper">
                <Header/>
                <section id="banner" className="style2" style={{ backgroundImage: `url(${category.thumbnail !== '' ? category.thumbnail : "images/pic07.jpg"})` }}>
                    <div className="inner">
							<span className="image">
								<img src="images/pic07.jpg" alt="" />
							</span>
                        <header className="major">
                            <h1>{ category.name }</h1>
                        </header>
                        <div className="content">
                            <p>{category.description}</p>
                        </div>
                    </div>
                </section>
                <div id="main">
                    <section id="two" className="spotlights">
                        {
                            posts.map(single => (
                                <section key={single.ID}>
                                    <Link to={`/post/${single.ID}`} className="image">
                                        <img src={single.thumbnail ? single.thumbnail : require("../../images/pic09.jpg") } alt="" data-position="center center" />
                                    </Link>
                                    <div className="content">
                                        <div className="inner">
                                            <header className="major">
                                                <h3>{ single.post_title }</h3>
                                            </header>
                                            <p>{ single.post_content.length > 500 ? single.post_content.substring(0, 500) + '...' : single.post_content.length }</p>
                                            <ul className="actions">
                                                <li><Link to={`/post/${single.ID}`} className="button">Learn more</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            ))
                        }
                    </section>
                </div>
                <Footer/>
            </div>
        ) : <Loader />;
    }
}

export default SingleCategory;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/index";
import Footer from "../Footer/index";
import Loader from "../Loader/Loader";

class Home extends Component {
    render() {
        const { fetching, categories, redirectTo } = this.props;
        return fetching ? <Loader/> : (
            <div id="wrapper">
                <Header/>
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>Headless WordPress</h1>
                        </header>
                        <div className="content">
                            <p>This application is backed by a Headless WordPress Deployment AKA WP REST API.</p>
                        </div>
                    </div>
                </section>
                <div id="main">
                    <section id="one" className="tiles">
                        {
                            categories.map(single => (
                                <article key={single.term_id} style={{ backgroundImage: `url(${single.thumbnail ? single.thumbnail : "images/pic01.jpg"})` }}
                                         onClick={ () => redirectTo(`/category/${single.term_id}`)} >
									<span className="image">
										<img src={require("../../images/pic01.jpg")} alt="" />
									</span>
                                    <header className="major">
                                        <h3><Link to={`/category/${single.term_id}`} className="link">{ single.name }</Link></h3>
                                        <p>{ single.description !== '' ? single.description : single.name }</p>
                                    </header>
                                </article>
                            ))
                        }
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;

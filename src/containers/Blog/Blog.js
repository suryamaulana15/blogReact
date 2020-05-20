import React, { Component } from 'react';

import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>home</NavLink></li>
                        <li><NavLink to={{
                            // pathname: this.props.match.url + 'new-post',
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>
                    </ul>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />    
                </Switch>
            </div>
        );
    }
}

export default Blog;
import React, { Component } from 'react';
import axios from '../../axios';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';


class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/posts" exact>All Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Route path="/new-post" exact component={NewPost}/>
                <Route path="/posts" component={Posts}/>
                
                </Switch>
                
                
                
            </div>
        );
    }
}

export default Blog;
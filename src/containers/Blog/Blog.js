import React, { Component } from 'react';
import axios from '../../axios';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
});


class Blog extends Component {
    state = {
        auth: true
    }


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
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} />: null }
                    {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                    
                    <Route path="/posts" component={Posts} />
                    <Route render={()=> <h1>Page Not Found</h1>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
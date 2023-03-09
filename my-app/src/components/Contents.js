import React, { Component } from 'react'
import {savedPosts} from '../posts.json'; 
import css from './css/Content.module.css';
import PostItem from './PostItem';

export class Contents extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    <h1>My Posts</h1>
                    <PostItem savedPosts={savedPosts}/>

                </div>
            </div>
        )
    }
}

export default Contents
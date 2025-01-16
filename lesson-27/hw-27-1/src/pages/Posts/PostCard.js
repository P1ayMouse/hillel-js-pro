import { useContext} from "react";
import { NavLink } from 'react-router-dom';

import { ThemeContext } from "../../context/ThemeContext";


import './Posts.css';

export default function PostCard({post}) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`postCard-${theme}`}>
            <span className='postTitle'>{post.title}</span>
            <span className='postBody'>{post.body.substring(0, 100)}...</span>
            <NavLink to={`/posts/${post.id}`}>Get more</NavLink>
        </div>
    )
}
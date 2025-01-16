import { useEffect, useState } from "react";

import { postBaseURL } from "../../api/apis";

import PostCard from "./PostCard";

export default function Posts() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(postBaseURL);
            const data = await response.json();
            setPosts(data);
            setLoading(false);
        }

        getPosts();
    }, []);

    return (
        <div>
            {loading && <div>Loading....</div>}
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    )
}
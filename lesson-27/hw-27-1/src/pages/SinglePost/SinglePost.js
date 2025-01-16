import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { postBaseURL } from "../../api/apis";

export default function SinglePost() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`${postBaseURL}/${id}`);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }

        getPost();
    }, [id]);

    const goToPosts = () => {
        navigate('/posts');
    };

    return (
        <div>
            {loading && <div>Loading....</div>}
            <span>{data.title}</span>
            <button onClick={goToPosts}>All Posts</button>
        </div>
    )
}
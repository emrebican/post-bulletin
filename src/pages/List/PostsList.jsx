import { Section } from "./post_styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "../../redux/postsSlice";

import PostCard from "../../components/PostCard/PostCard";

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    console.log(posts);
    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [postsStatus, dispatch])

    let content;
    if (postsStatus === "loading") {
        content = <p>Loading...</p>
    } else if (postsStatus === "succeeded") {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map(post => (
            <PostCard
                key={post.id}
                post={post}
            />
        ))
    } else if (postsStatus === "failed") {
        content = <p>{error}</p>
    }

    return (
        <Section>
            <h2>Posts</h2>
            {content}
        </Section>
    )
}

export default PostsList
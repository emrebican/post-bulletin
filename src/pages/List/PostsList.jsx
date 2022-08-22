import { Section } from "./post_styled";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/postsSlice";

import PostAuthor from "../../components/PostAuthor/PostAuthor";
import TimeAgo from "../../components/TimeAgo";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    console.log(posts);
    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.comment.substring(0, 100)}</p>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
        </article>
    ))

    return (
        <Section>
            <h2>Posts</h2>
            {renderedPosts}
        </Section>
    )
}

export default PostsList
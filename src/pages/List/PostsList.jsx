import { Section } from "./post_styled";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/postsSlice";

import PostAuthor from "../../components/PostAuthor/PostAuthor";
import TimeAgo from "../../components/TimeAgo";
import ReactionButtons from "../../components/ReactionButtons";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.comment.substring(0, 100)}</p>
            <PostAuthor userId={post.userId} />
            <div>
                <ReactionButtons post={post} />
                <TimeAgo timestamp={post.date} />
            </div>
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
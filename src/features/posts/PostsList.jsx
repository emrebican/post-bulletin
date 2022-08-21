import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { Section } from './postStyled';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    console.log(posts);
    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.comment.substring(0, 100)}</p>
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
import { Article } from './postCard_styled';
import PostAuthor from '../PostAuthor';
import TimeAgo from "../TimeAgo";
import ReactionButtons from "../ReactionButtons";

const PostCard = ({ post }) => {
    return (
        <Article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <PostAuthor userId={post.userId} />
            <div>
                <ReactionButtons post={post} />
                <TimeAgo timestamp={post.date} />
            </div>
        </Article>
    )
}

export default PostCard
import { useDispatch } from "react-redux";
import { reactionAdded } from "../redux/postsSlice";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕"
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();
    
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    return (
        <main>
            {reactionButtons}
        </main>
    )
}

export default ReactionButtons;

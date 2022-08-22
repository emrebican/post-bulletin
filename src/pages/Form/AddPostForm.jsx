import { useState } from "react";
import { Section } from './form_sytled';
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from '../../redux/postsSlice';
import { selectAllUsers } from "../../redux/usersSlice";

const AddPostForm = () => {

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [userId, setUserId] = useState('');

    const onChangeTitle = e => setTitle(e.target.value);
    const onChangeComment = e => setComment(e.target.value);
    const onChangeAuthor = e => setUserId(e.target.value);

    const canSave = Boolean(title) && Boolean(comment) && Boolean(userId);

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() && comment.trim()) {
            dispatch(postAdded(title, comment, userId))
        }

        setTitle('');
        setComment('');
        setUserId('');
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <Section>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input
                    type="text"
                    required
                    name="title"
                    value={title}
                    onChange={onChangeTitle}
                />
                <label>Author:</label>
                <select
                    value={userId}
                    onChange={onChangeAuthor}
                >
                    <option value=""></option>
                    {userOptions}
                </select>
                <label>Post Comment:</label>
                <textarea
                    type="text"
                    required
                    name="comment"
                    value={comment}
                    onChange={onChangeComment}
                />
                <button
                    disabled={!canSave}
                    className={!canSave ? "deactive" : ""}
                >
                    Save Post
                </button>
            </form>
        </Section>
    )
}

export default AddPostForm
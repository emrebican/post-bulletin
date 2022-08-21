import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { postAdded } from './postsSlice';

const AddPostForm = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        title: "",
        comment: ""
    });

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.title.trim() && input.comment.trim()) {
            dispatch(postAdded({
                id: nanoid(),
                ...input
            }))
        }

        setInput({
            title: "",
            comment: ""
        })
    }

    // onChange
    const handleChange = (e) => {
        const { value, name } = e.target;

        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input
                    type="text"
                    required
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                />
                <label>Post Comment:</label>
                <input
                    type="text"
                    required
                    name="comment"
                    value={input.comment}
                    onChange={handleChange}
                />
                <button>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm
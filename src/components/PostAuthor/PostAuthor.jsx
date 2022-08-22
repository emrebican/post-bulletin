import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../redux/usersSlice';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === userId);

    return (
        <small>
            by {author ? author.name : "Unknown author"}
        </small>
    )
}

export default PostAuthor;
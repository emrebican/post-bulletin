import { useDispatch } from "react-redux/es/exports";
import { postDeleted } from "../../redux/postsSlice";
import { Button } from './deleteButton_styled';

const DeleteButton = ({ id }) => {
    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => dispatch(postDeleted(id))}
        >
            x
        </Button>
    )
}

export default DeleteButton
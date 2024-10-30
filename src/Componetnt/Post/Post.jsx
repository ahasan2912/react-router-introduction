import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
    }

    const showHandleDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h3>Post of Id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>post Details</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={()=>showHandleDetails()}>click Show Button</button>
        </div>
    );
};

export default Post;
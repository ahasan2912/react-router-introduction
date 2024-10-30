import { Link } from "react-router-dom";

const UserData = ({user}) => {
    const {id,name, email, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>emial: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default UserData;
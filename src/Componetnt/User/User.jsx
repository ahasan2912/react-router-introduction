import { useLoaderData } from "react-router-dom";
import UserData from "../UserData/UserData";
import './User.css'
const User = () => {
   const users = useLoaderData();
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>now staying user</p>
            <div className="users">
                {
                    users.map(user => <UserData key={user.id} user={user}></UserData>)
                }
            </div>
        </div>
    );
};

export default User;
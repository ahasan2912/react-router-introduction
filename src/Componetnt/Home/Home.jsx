import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>
            }
            <h2>This the Home component.</h2>
        </div>
    );
};

export default Home;
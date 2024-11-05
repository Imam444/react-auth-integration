import { useContext } from "react";
import { UserContext } from "../Providers/UserProviders";


const Home = () => {
    const userInfo = useContext(UserContext)
    console.log(userInfo)
    return (
        <div>
            <h2 className="text-3xl">This is Home for:{ userInfo.name}</h2>
        </div>
    );
};

export default Home;
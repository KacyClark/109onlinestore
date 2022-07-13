import { Link } from "react-router-dom";
import "/"

const Home = () => {
    return (
    <div className="home-page">
        <h1>Specializing in Things for Your Chiwowwow!</h1>
        <Link className="btn-btn-secondary" to="/catalog">Check outout Furbulous catalog</Link>
    </div>
    );
};





export default Home;
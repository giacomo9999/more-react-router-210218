import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-outer">
      <h2>Types Of Coffee:</h2>
      <ul>
        <li>
          <Link to="/coffee/hot">Hot Coffee</Link>
        </li>
        <li>
          <Link to="/coffee/iced">Iced Coffee</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

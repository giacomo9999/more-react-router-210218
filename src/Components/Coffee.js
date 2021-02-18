import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Coffee = () => {
  let params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${params.type}`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, [params]);

  return (
    <div className="container-outer">
      <h2>Coffee Page</h2>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Coffee;

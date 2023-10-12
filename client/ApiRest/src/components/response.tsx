import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function Response() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data[0]));
  }, []);

  return (
    <div className="flex flex-col gap-24 mb-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-purple-400 lg:text-4xl">Response Reference</h2>

        <p className="text-sm lg:text-base">
          This is the response you get when you make a GET request to the
          endpoint
          </p>

        <pre className="text-sm lg:text-base">{JSON.stringify(products, null, 2)}</pre>
      </div>


      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-purple-400 lg:text-4xl">Get All Response</h2>

        <Link className="text-sm underline lg:text-base" to={"http://localhost:4000/api/products"}>/get</Link>
      </div>
    </div>
  );
}

export default Response;

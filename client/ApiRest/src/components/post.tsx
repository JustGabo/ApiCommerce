import { useState } from "react";

function Post() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
  });

  const handleSubmit = async ()=>{
    await fetch('http://localhost:4000/api/products',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(product)
    })
  }

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl font-semibold text-purple-400 capitalize">
        Post new product
      </h2>

      <form action="" className="flex flex-col gap-3 w-[30%] ">
        <label className="text-sm font-medium" htmlFor="PostName">
          Name
        </label>
        <input
          onChange={(e) => handleChanges(e)}
          name="name"
          className="p-2 text-xs border border-gray-400 rounded-md outline-none"
          type="text"
          id="PostName"
          placeholder="Enter new product name"
        />
        <label className="text-sm font-medium" htmlFor="PostCategory">
          Category
        </label>
        <input
          onChange={(e) => handleChanges(e)}
          name="category"
          className="p-2 text-xs border border-gray-400 rounded-md outline-none"
          type="text"
          id="PostCategory"
          placeholder="Enter new product category "
        />
        <label className="text-sm font-medium" htmlFor="PostPrice">
          Price
        </label>
        <input
          onChange={(e) => handleChanges(e)}
          name="price"
          className="p-2 text-xs border border-gray-400 rounded-md outline-none"
          type="number"
          id="PostPrice "
          placeholder="Enter new product price "
        />
        <button onClick={(e)=> {
            e.preventDefault()
            handleSubmit()
        }} className="py-2 mt-2 text-sm border border-gray-400 rounded-lg">
          Post Product
        </button>
      </form>
    </div>
  );
}

export default Post;

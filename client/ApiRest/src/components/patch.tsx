import { useState } from "react";

function Patch() {
  const [product, setProduct] = useState({
    id: null,
    name: null,
    category: null,
    price: null,
  });

  const handleSubmit = async () => {
    await fetch("http://localhost:4000/api/products", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(e.target.name)
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl font-semibold text-purple-400 capitalize">Update product</h2>

      <form action="" className="flex flex-col gap-3 w-[30%] ">
        <label className="text-sm font-medium" htmlFor="PatchId">
          ID
        </label>
        <input
          onChange={(e) => handleChanges(e)}
          name="id"
          className="p-2 text-xs border border-gray-400 rounded-md outline-none"
          type="number"
          id="PatchId"
          placeholder="Enter product id"
        />
        <label className="text-sm font-medium" htmlFor="PatchName">
          Name
        </label>
        <input
          onChange={(e) => handleChanges(e)}
          name="name"
          className="p-2 text-xs border border-gray-400 rounded-md outline-none"
          type="text"
          id="PatchName"
          placeholder="Enter new product name"
        />
        <label className="text-sm font-medium" htmlFor="PatchCategory">
          Category
        </label>
        <input
          onChange={(e) => handleChanges(e)}
          name="category"
          className="p-2 text-xs border border-gray-400 rounded-md outline-none"
          type="text"
          id="PatchCategory"
          placeholder="Enter new product category "
        />
        <label className="text-sm font-medium" htmlFor="PatchPrice">
          Price
        </label>
        <input
          onChange={(e) => handleChanges(e)}
          name="price"
          className="p-2 text-xs border border-gray-400 rounded-md outline-none"
          type="number"
          id="PatchPrice"
          placeholder="Enter new product price "
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="py-2 mt-2 text-sm border border-gray-400 rounded-lg"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default Patch;

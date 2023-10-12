import { useState } from "react";

function Delete() {
  const [productId, setProductId] = useState({
    id: "",
  });

  const handleSubmit = async () => {
    await fetch("http://localhost:4000/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productId),
    });
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductId({...productId, id: e.target.value});
    console.log(e.target.value)
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl font-semibold text-purple-400 capitalize">Delete product</h2>

      <form action="" className="flex flex-col gap-3 w-[30%] ">
        <label className="text-sm font-medium" htmlFor="DeleteId">
          ID
        </label>
        <input
          onChange={(e) => handleChanges(e)}
          name="id"
          className="p-2 text-xs border border-gray-400 rounded-md outline-none"
          type="number"
          id="DeleteId"
          placeholder="Enter product id"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="py-2 mt-2 text-sm border border-gray-400 rounded-lg"
        >
          Delete Product
        </button>
      </form>
    </div>
  );
}

export default Delete;

import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Edit = () => {
  const [products, setproducts] = useContext(ProductContext); //to  access the global state of products
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
    category: "",
  });

  const ChangeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setproduct({ ...product, [e.target.name]: e.target.value }); // updating the product object with each field input
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]); //get product by its ID
  }, [id, products]); //this will run only once when the component is mounted.

  const AddProductHandler = (e) => {
    e.preventDefault(); //to prevent the page from reloading

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 characters");
      return;
    } // to check whether all fields are filled or not

    const pi = products.findIndex((p) => p.id == id); //get product by its ID
    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product }; //copying data into new array with updated values

    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
    toast.success("Product Edited successfully"); // a  small pop up message after editing product
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input
        type="url"
        name="image"
        placeholder="image url"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={ChangeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        name="title"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={ChangeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          name="category"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={ChangeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={ChangeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
        placeholder="add product description here..."
        name="description"
        onChange={ChangeHandler}
        value={product && product.description}
      ></textarea>

      <div className="w-1/2">
        <button
          className="py-2 px-5 border rounded-full border-blue-200 text-blue-300"
          href="/create"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Edit;

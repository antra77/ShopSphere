import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Create = () => {
  const navigate = useNavigate();

  const [products, setproducts] = useContext(ProductContext); //to  access the global state of products
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault(); //to prevent the page from reloading

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 characters");
      return;
    } // to check whether all fields are filled or not

    const product = {
      id: nanoid(), // this is to create a random id whenever we create a new product
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product])); //to   save data in the browser's local storage and adds the newly created product in the existing array of products
    navigate("/"); //navigate back to homepage after adding the product
    toast.success("New product added successfully"); // a pop-up message that shows when the user adds a new product
  };
  return (
    <form
      onSubmit={AddProductHandler} //to submit the form
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>
      <input
        type="url"
        placeholder="image url"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
        placeholder="add product description here..."
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>

      <div className="w-1/2">
        <button
          className="py-2 px-5 border rounded-full border-blue-200 text-blue-300"
          href="/create"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;

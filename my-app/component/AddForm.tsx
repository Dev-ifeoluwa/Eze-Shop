import React from "react";

const AddForm = () => {
    // server Action
    async function create() {
        'use server'
        // Mutate data
    }
  return (
    <form
      action={create}
      className="w-full max-w-xl mx-auto flex flex-col justify-center items-center
    space-y-4 mt-3 md:mt-5"
    >
      <div className="flex flex-col w-full">
        <label>Product Image: </label>
        <input
          type="file"
          accept="image/*"
          name="image"
          className="w-full
            px-3 py-1.5 md:py-2 text-gray-500 rounded-xl bg-white border border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Product Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Product Name"
          className="w-full
            px-3 py-1.5 md:py-2 text-gray-500 rounded-xl bg-white border border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Product Price: </label>
        <input
          type="number"
          name="price"
          placeholder="Enter Your Product Price"
          className="w-full
            px-3 py-1.5 md:py-2 text-gray-500 rounded-xl bg-white border border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Product Link: </label>
        <input
          type="text"
          name="link"
          placeholder="Link to where buyers can find you"
          className="w-full
            px-3 py-1.5 md:py-2 text-gray-500 rounded-xl bg-white border border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Product Description: </label>
        <textarea
          name="description"
          id=""
          rows={4}
          value="Description what you sell"
          className="w-full
            px-3 py-1.5 md:py-2 text-gray-500 rounded-xl bg-white border border-gray-500"
        >
          
        </textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white px-3 py-2 mt-2 rounded-md cursor-pointer font-semibold
      hover:shadow-xl transition-shadow duration-300"
      >
        Add Your Product
      </button>
    </form>
  );
};

export default AddForm;

"use client";

import { updateAction } from '@/utils/updateAction'
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
// import React, { use } from "react";
import toast from "react-hot-toast";


interface Product {
  image: string;
  _id: string;
  name: string;
  price: number;
  link: string;
  description: string;
}


const UpdateForm = ({productId}: {productId: string}) => {
  const router = useRouter();
  const [imageURL, setImageURL] = useState("");
  const [product, setProduct] = useState<Product>();


  useEffect(() => {
    axios
    .get(`/api/product/${productId}`)
    .then((response) => setProduct(response.data.product))
  }, []);

  useEffect(() => {
    if(product) {
      setImageURL(product.image)
    }
  }, [product])


  async function clientAddAction(formData: FormData) {
    const { error, success } = await updateAction(formData, productId);

    if (error) {
      // toast notification
      toast.error(error);
    }

    if (success) {
      toast.success(success);

      router.push("/");

      setImageURL("");
    }
  }

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSize = file.size;

      if (Math.round(fileSize / 1024) > 1024) {
        toast.error("image is too big.");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };
  return (
    <form
      action={clientAddAction}
      className="w-full max-w-xl mx-auto flex flex-col justify-center items-center
    space-y-4 mt-3 md:mt-5"
    >
      {imageURL && (
        <Image
          src={imageURL}
          alt="banner image"
          width={100}
          height={100}
          className="max-w-full max-h-70 object-cover object-center
          rounded-lg"
        />
      )}
      <div className="flex flex-col w-full">
        <label>Product Image: </label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImage}
          className="w-full
            px-3 py-1.5 md:py-2 text-gray-500 rounded-xl bg-white border border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Product Name: </label>
        <input
          type="text"
          name="name"
          defaultValue={product?.name}
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
          defaultValue={product?.price}
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
          defaultValue={product?.link}
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
          defaultValue={product?.description}
          placeholder="Description what you sell"
          className="w-full
            px-3 py-1.5 md:py-2 text-gray-500 rounded-xl bg-white border border-gray-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white px-3 py-2 mt-2 rounded-md cursor-pointer font-semibold
      hover:shadow-xl transition-shadow duration-300"
      >
        Update Your Product
      </button>
    </form>
  );
};

export default UpdateForm;

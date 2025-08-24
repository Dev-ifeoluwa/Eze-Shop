"use client"

import UpdateForm from "@/component/UpdateForm";
import { useParams } from "next/navigation";
import React from "react";

const UpdateProductPage = () => {
  const params = useParams();


  return (
    <div className="px-4 md:px-12 bg-gray-200 pb-8">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full max-w-xl mx-auto">
        <span className="text-orange-500">Update</span> Product
      </h2>
      {/* update form */}
      <UpdateForm productId={params.productId as string}/>
    </div>
  );
};

export default UpdateProductPage;

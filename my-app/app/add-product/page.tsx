import AddForm from "@/component/AddForm";
import React from "react";

const AddProductPage = () => {
  return (
    <div className="h-screen px-4 md:px-12 bg-gray-200 pb-8">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full max-w-xl mx-auto">
        <span className="text-orange-500">Add</span> New Product
      </h2>
      {/* for form */}
      <AddForm />
    </div>
  );
};

export default AddProductPage;

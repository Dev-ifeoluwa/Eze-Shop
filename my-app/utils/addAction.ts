"use server";

import { connectDB } from "@/api/db/connectDB";

export async function addAction(formData : FormData) {
    try {
        const image = formData.get("image") as File;
        const name = formData.get("name");
        const price = formData.get("price");
        const link = formData.get("link");
        const description = formData.get("description");

        if(!image || !name || !price || !link || !description){
            console.log("All fields are required.")

            return{
                error: "All fields are required."
            }
        }

        await connectDB();
    } catch (error) {
        
    }
}



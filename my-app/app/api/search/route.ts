import { NextRequest } from "next/server";
import { connectDB } from "../db/connectDB";
import product from "../models/product.model";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const searchTerm = searchParams.get("searchProduct");

    const products = await product
      .find({
        name: { $regex: searchTerm, $options: "i" },
      })
      .sort({ created: -1 });

    return Response.json({ products }, { status: 200 });
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 400 });
  }
}

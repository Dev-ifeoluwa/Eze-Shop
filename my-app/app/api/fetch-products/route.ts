import { connectDB } from "../db/connectDB";
import product from "../models/product.model";

// Example URL: /api/fetch-products?page=2&limit=8
export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "8");
  const skip = (page - 1) * limit;

  try {
    const products = await product.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return Response.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching products:", error.message);
    return Response.json({ message: error.message }, { status: 400 });
  }
}

import { connectDB } from "../../db/connectDB";
import ProductModel from "../../models/product.model";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  await connectDB();
  const productId = params.productId;

  try {
    const product = await ProductModel.findById(productId);
    if (!product) {
      return Response.json({ message: "Product not found." }, { status: 404 });
    }

    return Response.json({ product }, { status: 200 });
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 400 });
  }
}

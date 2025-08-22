import { connectDB } from "../../db/connectDB";
import product from "../../models/product.model";

export async function GET(
    request: Request, {params}: {params: Promise<{productId: string}> }

) {
    await connectDB();
    const productId = (await params).productId;


    try {
        const Product = await product.findById(productId);
        if (!product) {
            return Response.json({message: "product not found."}, {status: 400});
        }
        return Response.json({product}, {status: 200})
    } catch (error: any) {
        return Response.json({message: error.message}, {status: 400})
    }
}
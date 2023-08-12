import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export function getProducts() {
  const filePath = path.join(process.cwd(), "products.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(fileContent);
  return products;
}

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}

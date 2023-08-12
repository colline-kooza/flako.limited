import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export function getCreals() {
  const filePath = path.join(process.cwd(), "creals.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const creals = JSON.parse(fileContent);
  return creals;
}

export async function GET() {
  const creals = await getCreals();
  return NextResponse.json(creals);
}

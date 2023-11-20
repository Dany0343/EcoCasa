import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function POST(request: Request) {
  const data = await request.json();

  const newUser = await db.user.create({
    data: data,
  });

  return NextResponse.json(newUser);
}

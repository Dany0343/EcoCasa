import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import db from "@/libs/db";

export async function POST(request: Request) {
  const data = await request.json();

  const emailFound = await db.user.findUnique({
    where: {
        email: data.email
    }
  })

  if(emailFound) {
    return NextResponse.json({
        message: "El email ya está registrado"
    }, {
        status: 400
    })
  }

  const usernameFound = await db.user.findUnique({
    where: {
        username: data.username
    }
  })

  if(usernameFound) {
    return NextResponse.json({
        message: "El username ya está registrado"
    }, {
        status: 400
    })
  }

  const newUser = await db.user.create({
    data: data,
  });

  return NextResponse.json(newUser);
}

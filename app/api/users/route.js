import connectionToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try{
    await connectionToDatabase();
    const {url, shorturl} = await request.json()

    const existingUser = await User.findOne({ shorturl });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Short URL already exists." },
        { status: 409 } // 409 Conflict
      );
    }

    const newUser = new User({url, shorturl});
    await newUser.save();
    return NextResponse.json({ success: true, message: "Short URL generated successfully" },
      { status: 200 });
  }catch(err){
    console.log(err);
  }
}
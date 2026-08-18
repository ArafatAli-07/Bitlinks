import connectionToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionToDatabase();

    const { url, shorturl } = await request.json();

    if (!url || !shorturl) {
      return NextResponse.json(
        {
          success: false,
          message: "URL and short URL are required.",
        },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ shorturl });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Short URL already exists.",
        },
        { status: 409 }
      );
    }

    const newUser = new User({
      url,
      shorturl,
    });

    await newUser.save();

    return NextResponse.json(
      {
        success: true,
        message: "Short URL generated successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error creating short URL:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes

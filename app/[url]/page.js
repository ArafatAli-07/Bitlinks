import { redirect } from "next/navigation";
import connectionToDatabase from "@/lib/mongodb";
import User from "@/models/User";

// This is a dynamic route handler for short URLs
export default async function Page({ params }) {
  const { url } = await params;

  await connectionToDatabase();

  const user = await User.findOne({ shorturl: url });

  if (user) {
    // Redirect to the original full URL
    redirect(user.url);
  } else {
    // Redirect to base URL (home or fallback) if shorturl not found
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }
}



// import { redirect } from "next/navigation";
// import connectionToDatabase from "@/lib/mongodb";
// import User from "@/models/User";

// export default async function Page({ params }) {
//   const { url } = params; // ✅ NO await

//   console.log("Short URL param:", url); // 🔍 Debug log

//   await connectionToDatabase();

//   const user = await User.findOne({ shorturl: url });

//   if (user?.url) {
//     const fullUrl = /^https?:\/\//i.test(user.url)
//       ? user.url
//       : `https://${user.url}`;

//     console.log("Redirecting to:", fullUrl); // ✅

//     redirect(fullUrl); // ✅ Success case
//   }

//   console.warn("Short URL not found, redirecting home.");
//   redirect("/"); // ⛔ Not found, fallback
// }

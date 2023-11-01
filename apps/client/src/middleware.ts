import { NextRequest, NextResponse } from "next/server";
import { validateJwtAndFetchUserId } from "@/lib/utils";

interface CustomRequest extends NextRequest {
  context: {
    userID: string | undefined;
  };
}

export const config = {
  matcher: ["/profile", "/s"],
};

export default async function middleware(req: CustomRequest) {
  console.log("Middleware started");

  try {
    // Use the validateJwtAndFetchUserId function to check the JWT token
  const userID = await validateJwtAndFetchUserId();
  console.log("UserID from JWT:", userID);
  // req.context.userID = userID;
  
  } catch (error) {
    console.log("Next js Middleware Error:", error);
    
    return NextResponse.redirect(new URL("/login", req.url));
  }


  console.log("Middleware completed");
  // Continue processing the request
  return NextResponse.next();
}

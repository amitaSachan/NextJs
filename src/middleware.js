import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware", request);
//   it will redirect all page to login page
 // if (request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
 // }
}
//we need to create config object with matcher,if we want to redirect specific pages.
export const config={
    matcher:"/aboutUs/aboutusteacher/:path*"
    // we can use array of matcher when we have more urls to redirect like-matcher:["/aboutUs/:path*","/studentlist/:path*"]
}

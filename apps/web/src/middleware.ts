import { auth } from "@/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";

export default auth(async (req): Promise<any> => {
  const { nextUrl } = req;
  const isLoggedIn = Boolean(req.auth);

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const session = req.auth?.user;
  var isOnboarded = false;
  if (session) {
    isOnboarded = session?.onboarding;
  }

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      if (isOnboarded) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      return Response.redirect(new URL("/welcome", nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl),
    );
  }
  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

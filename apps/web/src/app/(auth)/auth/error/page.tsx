import Link from "next/link";

export default function AuthErrorPage(): JSX.Element {
  return (
    <div className="text-white">
      <h1 className="text-xl font-bold">Auth Error</h1>
      <p className="">Oops! Something went wrong!</p>
      <Link href="/login">Back to Login</Link>
    </div>
  );
}

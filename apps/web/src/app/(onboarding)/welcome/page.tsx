import Link from "next/link";

export default function WelcomePage(): JSX.Element {
  return (
    <div>
      <h1>Welcome to the onboarding!</h1>
      <Link href="/createworkspace">Create workspace</Link>
    </div>
  );
}

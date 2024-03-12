import { auth, signOut } from "@/auth";

export default async function DashboardPage(): Promise<JSX.Element> {
  const session = await auth();
  return (
    <main>
      <h1 className="">I am Muse&apos;s Dashboard.</h1>
      <p>{JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </main>
  );
}

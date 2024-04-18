import Footer from "@/components/editor/footer";
import Nav from "@/components/editor/nav";
import { getCurrentUser } from "@/lib/auth";

export default async function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let user = await getCurrentUser();
  if (!user) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex h-dvh flex-col">
      <header className="bg-editor-light h-[30px] px-[5px]">
        <Nav user={user} />
      </header>
      <div className="flex flex-1">
        <aside className="bg-editor-dark w-[278px]"></aside>
        <main className="bg-editor-deep w-full">{children}</main>
      </div>
      <footer className="bg-editor-light h-[30px] px-[5px]">
        <Footer />
      </footer>
    </div>
  );
}

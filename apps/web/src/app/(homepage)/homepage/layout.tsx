import FooterSection from "@/components/homepage/footer-section";
import NavBar from "@/components/homepage/navbar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex flex-col">
      {/* Backdrop filter div */}
      <div className="h-header pointer-events-none fixed left-0 right-0 top-0 z-10 backdrop-blur-3xl" />
      {/* Header div with transparency */}
      <header
        className="border-grey/10 h-header fixed left-0 right-0 top-0 z-20 border-b bg-transparent px-4 py-2
      "
      >
        <NavBar />
      </header>

      <main className="padding-header">{children}</main>

      <footer className="py-16">
        <FooterSection />
      </footer>
    </div>
  );
}

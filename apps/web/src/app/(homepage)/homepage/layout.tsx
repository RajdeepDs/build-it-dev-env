import AnnouncementBanner from "@/components/homepage/announcement-banner";
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
      <div className="h-header pointer-events-none fixed left-0 right-0 top-0 z-20 backdrop-blur-3xl" />
      {/* Header div with transparency */}
      <header
        className="h-header bg-faded/60 fixed left-0 right-0 top-0 z-30 px-4 py-2
      "
      >
        <NavBar />
      </header>

      <main className="padding-header">
        <AnnouncementBanner />
        {children}
      </main>

      <footer className="bg-soft py-16">
        <FooterSection />
      </footer>
    </div>
  );
}
